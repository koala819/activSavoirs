"use client";
import Image from "next/image";
import { Article } from "@/src/components/molecules/Article";
import { Text } from "@/src/components/atoms/Text";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";
import CTA from "@/public/images/CTA_logo.jpeg";
import SOP from "@/public/images/SOP_logo.jpeg";

export function FourGoals({
  picture,
  title,
  description,
  events,
}: {
  picture: { src: string; height: number; width: number };
  title: string;
  description: string;
  events?: boolean;
}) {
  return (
    <section className='h-full py-16 space-y-8 flex flex-col'>
      <div
        className='image-container'
        style={{ width: "fixedWidth", height: "fixedHeight" }}
      >
        <Image
          src={picture}
          alt={`${title} picture`}
          width={1500}
          height={500}
        />
      </div>
      <Article
        title={title}
        description={description}
        button={{ display: true, text: "Contactez-nous" }}
      />
      {events && (
        <>
          <Text
            text="L'ensemble de la partie organisationnelle peut être confiée à ses partenaires"
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
                <Image
                  src={SOP}
                  alt='SOP event logo'
                  width={100}
                  height={100}
                />
              </picture>
            }
          />
        </>
      )}
    </section>
  );
}
