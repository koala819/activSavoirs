"use client";
import { useState } from "react";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";
import { Events } from "@/src/components/organisms/Events";
import { Formation } from "@/src/components/organisms/Formation";
import { Mentoring } from "@/src/components/organisms/Mentoring";
import { ServicesMenu } from "@/src/components/molecules/ServicesMenu";
import { Sourcing } from "@/src/components/organisms/Sourcing";
import { ServiceComponents } from "@/src/types/models";

export function Services() {
  const [section, setSection] = useState("sourcing");

  function chooseSection(section: string) {
    setSection(section);
  }

  const DisplayService = ({ section }: { section: string }) => {
    const serviceComponents: ServiceComponents = {
      events: <Events />,
      formation: <Formation />,
      mentoring: <Mentoring />,
      sourcing: <Sourcing />,
    };

    const selectedService = serviceComponents[section];

    if (!selectedService) {
      return <div>ERROR</div>;
    }

    return selectedService;
  };

  return (
    <>
      <DoubleColumn
        left={<ServicesMenu chooseSection={chooseSection} />}
        right={<DisplayService section={section} />}
      />
    </>
  );
}
