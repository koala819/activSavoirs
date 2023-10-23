"use client";
import { Image } from "@nextui-org/react";
import { TeamProp } from "@/src/types/models";
import { PrismicFormat } from "@/src/components/util/PrismicFormat";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GiMoebiusStar } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";

export function Team({ team }: { team: TeamProp[] }) {
  return (
    <div className='w-full'>
      {team.map((member: any, key: any) => {
        return (
          <section
            key={key}
            className='p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md'
          >
            <div className='w-full sm:flex items-center justify-center'>
              <div className='sm:w-1/2 flex items-center justify-center'>
                <Image
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                  src={member.photo.url || ""}
                />
              </div>
              <div className='sm:w-1/2'>
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900 dark:text-gray-100'>
                    {member.prenom} {member.nom}
                  </h2>
                  <h3 className='text-gray-500 mb-3 dark:text-gray-300'>
                    {member.titre}
                  </h3>
                  <div className='text-md mb-3'>
                    <Accordion>
                      <AccordionItem
                        key='1'
                        aria-label='Son parcours'
                        indicator={<GiMoebiusStar />}
                        title='Son parcours'
                      >
                        <PrismicFormat blocRichText={member.parcours} />
                      </AccordionItem>
                      <AccordionItem
                        key='2'
                        aria-label='Domaines de compétences'
                        indicator={<BsFillSunFill />}
                        title='Domaines de compétences'
                      >
                        <PrismicFormat
                          blocRichText={member.domaines_de_competences}
                        />
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
