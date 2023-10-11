"use client";
import { Image } from "@nextui-org/react";
import { TeamProp } from "@/types/models";
import { PrismicFormat } from "@/components/PrismicFormat";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GiMoebiusStar } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";

export function Team({ team }: { team: TeamProp }) {
  return (
    <div className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
            L’équipe pédagogique de ACTIV&apos; SAVOIRS c’est :
          </h1>
          <ul className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            <li>Une formidable équipe d&apos;experts passionnés</li>
            <li>Des savoir-faire métier éprouvés</li>
            <li>Une expertise reconnue</li>
            <li>Une dynamique pédagogique plébiscitée</li>
          </ul>
        </div>
        <section className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='w-full flex'>
              <div className='w-1/2 flex items-center justify-center'>
                <Image
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                  src={team.photo.url || ""}
                />
              </div>
              <div className='w-1/2'>
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    {team.prenom} {team.nom}
                  </h2>
                  <h3 className='text-gray-500 mb-3'>{team.titre}</h3>
                  <div className='text-md mb-3'>
                    <Accordion>
                      <AccordionItem
                        key='1'
                        aria-label='Son parcours'
                        indicator={<GiMoebiusStar />}
                        // subtitle={`avec sa formation ${team.prenom} ...`}
                        title='Son parcours'
                      >
                        <PrismicFormat blocRichText={team.parcours} />
                      </AccordionItem>
                      <AccordionItem
                        key='2'
                        aria-label='Domaines de compétences'
                        indicator={<BsFillSunFill />}
                        // subtitle={`avec sa formation ${team.prenom} ...`}
                        title='Domaines de compétences'
                      >
                        <PrismicFormat
                          blocRichText={team.domaines_de_competences}
                        />
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
