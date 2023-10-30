"use client";
import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export function CTA() {
  return (
    <ParallaxBanner className='aspect-[2/1]'>
      <ParallaxBannerLayer speed={80} scale={[0, 0.8, "easeOutBack"]}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <Text
              text='Parce que les savoirs sont une source d’épanouissement et de réalisation professionnel, développer les compétences de vos collaborateurs ! '
              className='title'
            />
            <Button
              text='Nous contacter'
              className='black-button'
              link='/contact'
            />
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}
