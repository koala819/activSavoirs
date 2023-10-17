"use client";
import { FiPlay } from "react-icons/fi";
import Image from "next/image";
import femme from "../public/images/Femme.png";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export function Homepage({ page }: { page: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className='md:flex mt-8 p-8 md:space-x-8 space-y-8 md:space-y-0'>
      <article className='w-full md:w-1/2 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='font-bold'>Mot de l&apos;expert</h2>
          {page.data.sujetmoment.map((ds: any, id: number) => {
            if ("text" in ds) {
              return (
                <div key={id}>
                  {ds.text === "" ? <div className='h-4' /> : ds.text}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </article>
      <aside className='w-full  md:w-1/2 h-[350px] md:h-auto flex items-center justify-center'>
        <div className='w-full px-8 relative h-full md:h-2/3 lg:h-2/3 xl:h-full flex items-center justify-center'>
          <div className='bg-black w-full h-48 relative flex items-center justify-center'>
            <sup
              className='absolute top-2 right-2 xl:left-2 text-white hover:cursor-pointer z-10'
              onClick={() => onOpen()}
            >
              <FiPlay size={32} />
            </sup>
          </div>
          <Image
            src={femme}
            alt='Toto'
            className='absolute mt-2 sm:mt-0 h-full object-cover'
          />
        </div>
      </aside>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='sm'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div
                  className='flex items-center justify-center w-full h-full'
                  dangerouslySetInnerHTML={{
                    __html: page.data.video.html || "",
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
