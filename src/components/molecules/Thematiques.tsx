"use client";
import { Thematique } from "@/src/components/atoms/Thematique";
import { thematiques } from "@/src/lib/thematiques";
import { Text } from "@/src/components/atoms/Text";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/public/images/CTA_logo.jpeg";
import SOP from "@/public/images/SOP_logo.jpeg";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";

export function Thematiques() {
  return (
    <section className='w-full'>
      <Text
        text="Nos domaines d'expertises"
        className='text-white text-center text-5xl font-bold py-8'
      />
      <div className='flex flex-col justify-center items-center'>
        <picture className='grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8'>
          {thematiques.map((thematique, index) => (
            <Thematique
              key={index}
              title={thematique.name}
              icon={thematique.icon}
            />
          ))}
        </picture>
        <blockquote className='flex pt-8'>
          <Text
            text='VOUS NE TROUVEZ PAS CE QUE VOUS RECHERCHEZ ?'
            className='text-white text-center text-sm'
          />
          <Link href='/contact'>
            <Text
              text='CONTACTEZ-NOUS'
              className='text-white text-center text-sm font-extrabold ml-2 hover:underline cursor-pointer'
            />
          </Link>
        </blockquote>

        <Text
          text='EN PARTENARIAT AVEC'
          className='text-white text-center text-sm mt-16'
        />
        <DoubleColumn
          sectionClassName='dble-clmn-section space-y-0'
          leftClassName='dble-clmn-aside flex items-center justify-center md:items-end'
          rightClassName='w-full p-4 flex items-center justify-center md:justify-start'
          left={
            <picture className='px-4 rounded-xl bg-white'>
              <Image src={CTA} alt='CTA Business Travel logo' />
            </picture>
          }
          right={
            <picture className='bg-white rounded-xl px-4'>
              <Image src={SOP} alt='SOP event logo' />
            </picture>
          }
        />
      </div>
    </section>
  );
}
