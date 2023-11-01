"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { ColumnSwitcher } from "@/src/components/organisms/ColumnSwitcher";
import { thematiques } from "@/src/types/thematiques";
import { Text } from "@/src/components/atoms/Text";

export function EfficaciteManageriale({
  menu,
  evals,
}: {
  menu: { text: string }[];
  evals: any;
}) {
  return (
    <div className='flex flex-col w-full'>
      <picture className='flex justify-center'>
        {React.cloneElement(thematiques.efficaciteManageriale.icon, {
          size: 50,
        })}
      </picture>
      <Text
        text={thematiques.efficaciteManageriale.title}
        className='title text-center'
      />
      <picture className='flex justify-center '>
        <Image
          loading='eager'
          src={thematiques.efficaciteManageriale.picture.src}
          alt={thematiques.efficaciteManageriale.picture.alt}
          width={3000}
          height={80}
        />
      </picture>

      <ColumnSwitcher
        leftData={menu}
        initialValue='thématiques'
        listType='list-none'
        theme={thematiques.efficaciteManageriale}
        evals={evals}
      />
    </div>
  );
}
