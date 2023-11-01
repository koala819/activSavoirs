"use client";
import { useState } from "react";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";
import { DisplayLeftSwitch } from "@/src/components/molecules/DisplayLeftSwitch";
import { DisplayRightSwitch } from "@/src/components/atoms/DisplayRightSwitch";

export function ColumnSwitcher({ leftData }: { leftData: { text: string }[] }) {
  const [section, setSection] = useState("sourcing");

  function chooseSection(section: string) {
    setSection(section);
  }

  return (
    <section className='w-full'>
      <DoubleColumn
        sectionClassName='dble-clmn-section'
        leftClassName='dble-clmn-aside space-y-10'
        rightClassName='dble-clmn-aside space-y-10'
        left={
          <DisplayLeftSwitch chooseSection={chooseSection} liItems={leftData} />
        }
        right={<DisplayRightSwitch section={section} />}
      />
    </section>
  );
}
