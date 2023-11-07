"use client";
import Image from "next/image";
import { Article } from "@/src/components/molecules/Article";
import events from "@/public/images/Events.png";
import { Text } from "@/src/components/atoms/Text";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";
import CTA from "@/public/images/CTA_logo.jpeg";
import SOP from "@/public/images/SOP_logo.jpeg";

export function Events() {
  return (
    <div className='h-full py-16 space-y-8'>
      <Article
        image={{ src: events, alt: "events picture" }}
        title='Capitaliser sur la dynamique et l’intelligence collective'
        description='Vincent Declercq, le dirigeant fondateur de Activ’ Savoirs anime tous types d’événements d’entreprise : Convention – Séminaire – Incentive – Conférence
        Les thématiques : Le management stratégique, de transition et opérationnel.
        La performance commerciale, la dynamique et l’intelligence collective
        Totalement sur-mesure, ces prestations sont co-construites avec le TOP Management'
        button={{ display: true, text: "Contactez-nous" }}
      />
      <Text
        text="l'ensemble de la partie oragnisationnelle peut être confiée à nos partenaires"
        className=' text-center text-sm uppercase'
      />
      <DoubleColumn
        sectionClassName='dble-clmn-section space-y-0 -pt-12'
        leftClassName='dble-clmn-aside flex items-center justify-center md:items-end'
        rightClassName='w-full flex items-center justify-center md:justify-start'
        left={
          <picture className='px-4 rounded-xl bg-white -mt-16'>
            <Image
              src={CTA}
              alt='CTA Business Travel logo'
              width={100}
              height={100}
            />
          </picture>
        }
        right={
          <picture className='bg-white rounded-xl px-4 -mt-16'>
            <Image src={SOP} alt='SOP event logo' width={100} height={100} />
          </picture>
        }
      />
    </div>
  );
}
