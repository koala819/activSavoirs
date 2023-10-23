"use client";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import dataDock from "../../../public/images/dataDock.png";
import femme from "../../../public/images/Femme.png";
import { WhiteBox } from "@/src/components/atoms/WhiteBox";

export function YouTube({ video }: { video: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className='flex justify-center items-center'>
      <div className='bg-[#D1E4DD] w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 relative h-[400px] rounded-xl'>
        <sup
          className='absolute top-2 left-2 text-black hover:cursor-pointer z-10 rounded-full bg-white p-4 shadow-xl'
          onClick={() => onOpen()}
        >
          <FaPlay size={24} />
        </sup>
        <WhiteBox
          number={4850}
          text='Elèves formés'
          className='top-28 -left-16'
        />
        <WhiteBox
          number={2368}
          text='Formations'
          className='top-8 -right-8 sm:-right-16'
        />

        <div className='w-full h-full absolute -bottom-12 md:-bottom-12 xl:-bottom-16 lg:ml-4 xl:ml-8'>
          <Image src={femme} fill alt='Femme rousse' />
        </div>
        <Image
          src={dataDock}
          alt='logo dataDock'
          className='absolute -bottom-4 md:-bottom-8 -right-16 '
          width={50}
          height={100}
        />
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size='full'
          hideCloseButton={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <ReactPlayer
                    controls={true}
                    url={video.data.video.html || ""}
                    width='100%'
                    height='100%'
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
      </div>
    </section>
  );
}
