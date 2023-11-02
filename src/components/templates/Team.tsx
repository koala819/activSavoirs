"use client";
import { TeamProp } from "@/src/types/models";
import { Text } from "../atoms/Text";
import {
  Modal,
  Image,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { PrismicFormat } from "@/src/components/util/PrismicFormat";
import { useState } from "react";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";

export function Team({ team }: { team: TeamProp[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [member, setMember] = useState<any>();

  function displayModal(member: any) {
    setMember(member);
    onOpen();
  }

  return (
    <>
      {team.map((member: any, key: any) => {
        return (
          <section
            key={key}
            className='rounded-lg bg-white dark:bg-gray-900 shadow-md p-2 w-full hover:cursor-pointer flex md:flex-col'
            onClick={() => displayModal(member)}
          >
            <picture className='w-full sm:flex items-center justify-center'>
              <Image
                alt='team'
                className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                src={member.photo.url || ""}
              />
            </picture>

            <text className='w-full p-4 text-center flex items-center'>
              <div className='w-full'>
                <h2 className='font-medium text-lg text-gray-900 dark:text-gray-100'>
                  {member.prenom}
                </h2>
                {member.titre && member.titre.length >= 66 && (
                  <h3 className='text-gray-500 mb-3 dark:text-gray-300 text-base md:text-[11px]'>
                    {member.titre}
                  </h3>
                )}
                {member.titre &&
                  member.titre.length > 50 &&
                  member.titre.length < 54 && (
                    <h3 className='text-gray-500 mb-3 dark:text-gray-300 text-base md:text-sm'>
                      {member.titre}
                    </h3>
                  )}
                {member.titre &&
                  member.titre.length >= 54 &&
                  member.titre.length < 66 && (
                    <h3 className='text-gray-500 mb-3 dark:text-gray-300 text-base md:text-xs'>
                      {member.titre}
                    </h3>
                  )}
                {member.titre && member.titre.length < 50 && (
                  <h3 className='text-gray-500 mb-3 dark:text-gray-300 text-base'>
                    {member.titre}
                  </h3>
                )}
              </div>
            </text>
          </section>
        );
      })}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='5xl'
        scrollBehavior={"inside"}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <Text text={member.prenom} className='title' />
                <h3 className='text-gray-500 mb-3 dark:text-gray-300 text-base'>
                  {member.titre}
                </h3>
              </ModalHeader>
              <ModalBody>
                <DoubleColumn
                  sectionClassName='dble-clmn-section space-y-0'
                  leftClassName='dble-clmn-aside'
                  rightClassName='dble-clmn-aside'
                  left={
                    <div className='flex items-center justify-center'>
                      <Image
                        src={member.photo.url || ""}
                        alt={member.photo.alt}
                      />
                    </div>
                  }
                  right={
                    <>
                      <Text text='Son parcours' className='title' />
                      <PrismicFormat blocRichText={member.parcours} />
                      <Text text='Domaines de compétences' className='title' />
                      <PrismicFormat
                        blocRichText={member.domaines_de_competences}
                      />
                    </>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' onPress={onClose}>
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
