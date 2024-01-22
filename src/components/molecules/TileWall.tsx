'use client'

import Image from 'next/image'
import Link from 'next/link'

import { thematics } from '@/src/types/thematics'

import { Text } from '@/src/components/atoms/Text'
import { Tile } from '@/src/components/atoms/Tile'
import { DoubleColumn } from '@/src/components/molecules/DoubleColumn'

import CTA from '@/public/images/CTA_logo.jpeg'
import SOP from '@/public/images/SOP_logo.jpeg'

export function TileWall() {
  return (
    <section className="w-full">
      <Text
        text="Nos domaines d'expertises"
        className="text-white text-center text-5xl font-bold py-8"
      />
      <div className="flex flex-col justify-center items-center">
        <picture className="grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8">
          {thematics.map((thematic, index) => (
            <Tile
              key={index}
              title={thematic.title}
              icon={thematic.icon}
              path={thematic.path}
            />
          ))}
        </picture>
        <blockquote className="flex pt-8">
          <Text
            text="VOUS AVEZ BESOIN DE RENSEIGNEMENTS COMPLéMENTAIRES ?"
            className="text-white text-center text-md uppercase"
          />
          <Link href="/contact">
            <Text
              text="MERCI DE NOUS CONTACTER"
              className="text-white text-center text-sm font-extrabold ml-2 hover:underline cursor-pointer mt-0.5"
            />
          </Link>
        </blockquote>

        <Text
          text="en partenariat avec"
          className="text-white text-center text-sm mt-16 uppercase"
        />
        <DoubleColumn
          sectionClassName="dble-clmn-section space-y-0"
          leftClassName="dble-clmn-aside flex items-center justify-center md:items-end"
          rightClassName="w-full p-4 flex items-center justify-center md:justify-start"
          left={
            <picture className="px-4 rounded-xl bg-white">
              <Image src={CTA} alt="CTA Business Travel logo" />
            </picture>
          }
          right={
            <picture className="bg-white rounded-xl px-4">
              <Image src={SOP} alt="SOP event logo" />
            </picture>
          }
        />
      </div>
    </section>
  )
}
