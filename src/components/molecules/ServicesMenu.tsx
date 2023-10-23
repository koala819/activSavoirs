"use client";
import { useState } from "react";
import { Text } from "@/src/components/atoms/Text";
import { Li } from "@/src/components/atoms/Li";

export function ServicesMenu({ chooseSection }: any) {
  const [selectedLi, setSelectedLi] = useState("sourcing");

  const handleLiClick = (text: any) => {
    chooseSection(text);
    setSelectedLi(text);
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Text
        text={"Formations pragmatiques à forte valeur ajoutée"}
        className='title mb-8'
      />
      <div className='w-full pl-4 xl:pl-16'>
        <ul className='list-disc space-y-4 font-bold ml-4'>
          <Li
            text={"sourcing"}
            chooseSection={chooseSection}
            selected={selectedLi === "sourcing"}
            onClick={handleLiClick}
          />
          <Li
            text={"formation sur mesure"}
            chooseSection={chooseSection}
            selected={selectedLi === "formation"}
            onClick={handleLiClick}
          />
          <Li
            text={"mentoring"}
            chooseSection={chooseSection}
            selected={selectedLi === "mentoring"}
            onClick={handleLiClick}
          />
          <Li
            text={"events"}
            chooseSection={chooseSection}
            selected={selectedLi === "events"}
            onClick={handleLiClick}
          />
        </ul>
      </div>
    </div>
  );
}
