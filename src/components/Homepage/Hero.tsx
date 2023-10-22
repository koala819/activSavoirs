"use client";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ReactPlayer from "react-player";
import femme from "../../../public/images/Femme.png";
import dataDock from "../../../public/images/dataDock.png";
import { Article } from "../molecules/Article";
import { Stars } from "../molecules/Stars";
import { WhiteBox } from "../atoms/WhiteBox";

export function Hero({ page }: { page: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className='md:flex mt-8 p-8 md:space-x-8 space-y-8 md:space-y-0'>
        <Article
          heroTitle='activateur de Compétences'
          title='Développer l’agilité et la flexibilité de votre entreprise par la
    montée en compétences de vos collaborateurs'
          description='Nos actions de formation à forte valeur ajoutée ont pour objectifs
          de contribuer à l’efficacité et à la compétitivité de votre
          entreprise.'
        />
        <aside className='flex w-full md:w-1/2 justify-center items-center'>
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
          </div>
        </aside>
      </section>
      <footer className='flex justify-center'>
        <Stars
          beforeStars='Excellent'
          afterStars='4.9/5 avis sur plus de 800'
        />
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
