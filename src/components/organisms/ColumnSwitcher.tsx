"use client";
import { useState } from "react";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";
import { DisplayLeftSwitch } from "@/src/components/molecules/DisplayLeftSwitch";
import { DisplayRightSwitch } from "@/src/components/atoms/DisplayRightSwitch";

export function ColumnSwitcher({
  leftData,
  displayBorderLeftSwitch = false,
  displayTitle,
  evals,
  initialValue,
  listType,
  theme,
}: {
  displayTitle?: boolean;
  displayBorderLeftSwitch?: boolean;
  evals?: any;
  initialValue?: string;
  leftData: { text: string }[];
  listType: string;
  theme?: {
    results: { text: string };
    supports: { text: string }[];
    thematics: { text: string }[];
  };
}) {
  const [section, setSection] = useState(initialValue || "");

  function chooseSection(section: string) {
    setSection(section);
  }

  return (
    <section className='w-full flex justify-center'>
      <DoubleColumn
        sectionClassName='sm:flex sm:w-11/12'
        leftClassName={`${
          displayBorderLeftSwitch ? "md:border-r-2 md:border-black md:my-4" : ""
        } dble-clmn-aside space-y-10`}
        rightClassName='dble-clmn-aside space-y-10'
        left={
          <DisplayLeftSwitch
            chooseSection={chooseSection}
            liItems={leftData}
            listType={listType}
            initialValue={initialValue}
            displayTitle={displayTitle || false}
          />
        }
        right={
          <DisplayRightSwitch section={section} theme={theme} evals={evals} />
        }
      />
    </section>
  );
}
