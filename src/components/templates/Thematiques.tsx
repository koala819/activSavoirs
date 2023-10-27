"use client";
import { Thematique } from "@/src/components/atoms/Thematique";
import { thematiques } from "@/src/lib/thematiques";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export function Thematiques() {
  return (
    <ParallaxBanner className='aspect-[2/1]'>
      <ParallaxBannerLayer speed={80} scale={[0, 1, "easeOutBack"]}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <section className='grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8'>
            {thematiques.map((thematique, index) => (
              <Thematique
                key={index}
                title={thematique.name}
                icon={thematique.icon}
              />
            ))}
          </section>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}
