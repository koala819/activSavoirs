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
    <>
      <div className='min-h-screen'>
        <section className='md:flex mt-8 p-8 md:space-x-8 '>
          <div className='w-full md:w-1/2 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md'>
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
            s
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center relative mt-12'>
            <div className='bg-black w-full h-48 relative'>
              <div
                className='absolute top-2 left-2 text-white hover:cursor-pointer z-10'
                onClick={() => onOpen()}
              >
                <FiPlay size={32} />
              </div>
            </div>
            <Image
              src={femme}
              alt='Toto'
              //   className='absolute h-full mt-8 sm:mt-0 md:h-3/4 xl:h-3/4 lg:object-cover'
              className='absolute mt-2 sm:mt-0 md:h-3/4 xl:h-3/4 lg:object-cover'
            />
          </div>
        </section>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div
                  className='flex items-center justify-center'
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
    </>
  );
}
