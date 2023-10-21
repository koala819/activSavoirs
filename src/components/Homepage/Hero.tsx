"use client";
import { FaPlay } from "react-icons/fa";
import { PiStarDuotone, PiStarHalfDuotone } from "react-icons/pi";
import Image from "next/image";
import femme from "../../../public/images/Femme.png";
import dataDock from "../../../public/images/dataDock.png";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ReactPlayer from "react-player";

export function Hero({ page }: { page: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className='md:flex mt-8 p-8 md:space-x-8 space-y-8 md:space-y-0'>
        <article className='w-full md:w-1/2 p-4'>
          <span className='text-xs sm:text-base uppercase'>
            activateur de Compétences
          </span>
          <p className='font-black sm:text-5xl md:text-2xl mb-8 mt-4'>
            Développer l’agilité et la flexibilité de votre entreprise par la
            montée en compétences de vos collaborateurs
          </p>
          <p className='sm:text-lg text-gray-500 italic mb-10'>
            Nos actions de formation à forte valeur ajoutée ont pour objectifs
            de contribuer à l’efficacité et à la compétitivité de votre
            entreprise.{" "}
          </p>
          <Button
            variant='solid'
            className='bg-black text-white sm:px-8 font-bold'
          >
            Nous contacter
          </Button>
        </article>
        <aside className='flex w-full md:w-1/2 justify-center items-center'>
          <div className='bg-[#D1E4DD] w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 relative h-[400px] rounded-xl'>
            <sup
              className='absolute top-2 left-2 text-black hover:cursor-pointer z-10 rounded-full bg-white p-4 shadow-xl'
              onClick={() => onOpen()}
            >
              <FaPlay size={24} />
            </sup>
            <section className='absolute top-28 -left-16 flex flex-col text-center bg-white p-2 sm:p-4 border-2 rounded-xl z-10 '>
              <span className='text-xs sm:text-sm xl:text-lg font-extrabold'>
                4850
              </span>
              <span className='text-xs sm:text-sm xl:text-lg text-gray-500'>
                Elèves formés
              </span>
            </section>
            <section className='absolute top-8 -right-8 sm:-right-16 flex flex-col text-center bg-white p-2 sm:p-4 border-2 rounded-xl z-10 '>
              <span className='text-xs sm:text-sm xl:text-lg font-extrabold'>
                2368
              </span>
              <span className='text-xs sm:text-sm xl:text-lg text-gray-500'>
                Formations
              </span>
            </section>
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
          </div>
        </aside>
      </section>
      <footer className='flex justify-center space-x-4 w-full items-center'>
        <span className='text-xs sm:text-xl italic text-gray-500'>
          Excellent
        </span>
        <div className='flex'>
          <PiStarDuotone size={24} className='text-yellow-400' />
          <PiStarDuotone size={24} className='text-yellow-400' />
          <PiStarDuotone size={24} className='text-yellow-400' />
          <PiStarHalfDuotone size={24} className='text-yellow-400' />
          <PiStarDuotone size={24} className='text-gray-300' />
        </div>
        <span className='text-xs sm:text-base italic text-gray-500'>
          4.9/5 avis sur plus de 800
        </span>
      </footer>
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
                  url={page.data.video.html || ""}
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
    </>
  );
}
