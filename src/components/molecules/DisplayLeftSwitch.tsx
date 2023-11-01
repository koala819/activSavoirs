"use client";
import { useState } from "react";
import { Text } from "@/src/components/atoms/Text";
import { Li } from "@/src/components/atoms/Li";

export function DisplayLeftSwitch({
  chooseSection,
  liItems,
}: {
  chooseSection: any;
  liItems: { text: string }[];
}) {
  const [selectedItem, setSelectedItem] = useState<string>("sourcing");

  const handleLiClick = (text: any) => {
    chooseSection(text.split(" ")[0]);
    setSelectedItem(text);
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Text
        text={"Formations pragmatiques à forte valeur ajoutée"}
        className='title mb-8'
      />
      <div className='w-full pl-4 xl:pl-16'>
        <ul className='list-disc space-y-4 font-bold ml-4'>
          {liItems.map((item: { text: string }) => (
            <Li
              key={item.text}
              text={item.text}
              isSelected={selectedItem === item.text}
              onClick={handleLiClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
