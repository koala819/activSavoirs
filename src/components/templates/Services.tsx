"use client";
import { useState } from "react";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";
import { Events } from "@/src/components/organisms/Events";
import { Formation } from "@/src/components/organisms/Formation";
import { Mentoring } from "@/src/components/organisms/Mentoring";
import { ServicesMenu } from "@/src/components/molecules/ServicesMenu";
import { Sourcing } from "@/src/components/organisms/Sourcing";
import { ServiceComponents } from "@/src/types/models";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

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
    <ParallaxBanner className='aspect-[2/0.8]'>
      <ParallaxBannerLayer speed={80} scale={[0, 1, "easeOutBack"]}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <DoubleColumn
            sectionClassName='dble-clmn-section'
            leftClassName='dble-clmn-aside space-y-10'
            rightClassName='dble-clmn-aside space-y-10'
            left={<ServicesMenu chooseSection={chooseSection} />}
            right={<DisplayService section={section} />}
          />
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}
