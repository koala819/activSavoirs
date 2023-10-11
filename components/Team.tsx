"use client";
import { Image } from "@nextui-org/react";
import { TeamProp } from "@/types/models";
import { PrismicFormat } from "@/components/PrismicFormat";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GiMoebiusStar } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";

export function Team({ team }: { team: TeamProp[] }) {
  console.log("TEAMdr", team);
  return (
    <div className='flex flex-wrap -m-4'>
      {team.map((member: any, key: any) => {
        {
          console.log("member", member);
        }
        return (
          <section key={key} className='p-4 lg:w-1/2'>
            <div className='w-full flex'>
              <div className='w-1/2 flex items-center justify-center'>
                <Image
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                  src={member.photo.url || ""}
                />
              </div>
              <div className='w-1/2'>
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    {member.prenom} {member.nom}
                  </h2>
                  <h3 className='text-gray-500 mb-3'>{member.titre}</h3>
                  <div className='text-md mb-3'>
                    <Accordion>
                      <AccordionItem
                        key='1'
                        aria-label='Son parcours'
                        indicator={<GiMoebiusStar />}
                        // subtitle={`avec sa formation ${member.prenom} ...`}
                        title='Son parcours'
                      >
                        <PrismicFormat blocRichText={member.parcours} />
                      </AccordionItem>
                      <AccordionItem
                        key='2'
                        aria-label='Domaines de compétences'
                        indicator={<BsFillSunFill />}
                        // subtitle={`avec sa formation ${member.prenom} ...`}
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
      {/* <section className='p-4 lg:w-1/2'>
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
      </section> */}
    </div>
  );
}
