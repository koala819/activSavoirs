"use client";
import { Thematique } from "@/src/components/atoms/Thematique";
import { thematiques } from "@/src/lib/thematiques";
import { Text } from "@/src/components/atoms/Text";
import Link from "next/link";

export function Thematiques() {
  return (
    <section className='w-full'>
      <Text
        text="Nos domaines d'expertises"
        className='text-white text-center text-5xl font-bold pb-8'
      />
      <div className='flex flex-col justify-center items-center'>
        <section className='grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8'>
          {thematiques.map((thematique, index) => (
            <Thematique
              key={index}
              title={thematique.name}
              icon={thematique.icon}
            />
          ))}
        </section>
        <section className='flex pt-8'>
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
        </section>
        <section className='mt-20'>
          <Text
            text='EN PARTENARIAT AVEC'
            className='text-white text-center text-sm'
          />
          <div className='flex justify-center space-x-4'>
            <aside className='bg-white w-1/3 rounded-xl p-8'>CTA</aside>
            <aside className='bg-white w-1/3 rounded-xl p-8'>SOP</aside>
          </div>
        </section>
      </div>
    </section>
  );
}
