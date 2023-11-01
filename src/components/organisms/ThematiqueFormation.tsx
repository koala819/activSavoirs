"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { ColumnSwitcher } from "@/src/components/organisms/ColumnSwitcher";
import { Text } from "@/src/components/atoms/Text";
import { SelectedType } from "@/src/types/models";

export function ThematiqueFormation({
  menu,
  evals,
  selected,
}: {
  menu: { text: string }[];
  evals: any;
  selected: SelectedType;
}) {
  return (
    <div className='flex flex-col w-full'>
      <picture className='flex justify-center'>
        {React.cloneElement(selected.icon, {
          size: 50,
        })}
      </picture>
      <Text text={selected.title} className='title text-center' />
      <picture className='flex justify-center '>
        <Image
          loading='eager'
          src={selected.picture.src}
          alt={selected.picture.alt}
          width={3000}
          height={80}
        />
      </picture>

      <ColumnSwitcher
        leftData={menu}
        initialValue='thématiques'
        listType='list-none'
        theme={selected}
        evals={evals}
      />
    </div>
  );
}
