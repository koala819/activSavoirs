"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { ColumnSwitcher } from "@/src/components/organisms/ColumnSwitcher";
import { Text } from "@/src/components/atoms/Text";
import { Thematique } from "@/src/types/models";

export function Thematic({
  menu,
  evals,
  selected,
}: {
  menu: { text: string }[];
  evals: any;
  selected: Thematique;
}) {
  return (
    <div className='flex flex-col w-full mt-16'>
      <picture className='flex justify-center'>
        <div className='flex items-center justify-center bg-slate-300 opacity-75 rounded-full w-16 h-16 md:w-20 md:h-20'>
          {React.cloneElement(selected.icon, {
            // size: 30,
            color: "gray",
            className: "w-6 h-6 md:w-12 md:h-12",
          })}
        </div>
      </picture>
      <Text
        text={selected.title}
        className='text-center py-6 text-2xl sm:text-5xl font-black'
      />
      <picture className='w-full flex justify-center'>
        <div className='w-11/12'>
          <Image
            loading='eager'
            src={`/${selected.picture.src}`}
            alt={selected.picture.alt}
            width={3000}
            height={80}
          />
        </div>
      </picture>
      <ColumnSwitcher
        displayBorderLeftSwitch
        leftData={menu}
        initialValue='thématiques'
        listType='list-none'
        theme={selected}
        evals={evals}
      />
    </div>
  );
}
