"use client";
import { Article } from "@/src/components/molecules/Article";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";
import { CarouselRef } from "@/src/components/templates/Caroussel";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export function Proposition({ nosRef }: { nosRef: any }) {
  return (
    <ParallaxBanner className='aspect-[2/1]'>
      <ParallaxBannerLayer speed={80} scale={[0, 1, "easeOutBack"]}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div>
            <DoubleColumn
              sectionClassName='dble-clmn-section'
              leftClassName='dble-clmn-aside space-y-10'
              rightClassName='dble-clmn-aside space-y-10'
              left={
                <Article
                  title='Savoir définir et actionner vos besoins de compétences actuels et à venir.'
                  description='Créé en 2009 notre organisme de formation professionnelle continue a pour principal objectif de vous aider à optimiser la gestion des RH.
        Nos méthodes pédagogiques sont plébiscitées par nos clients et stagiaires.'
                  button={{ display: false }}
                />
              }
              right={
                <section className='flex flex-col space-y-8 justify-center w-full items-center h-full'>
                  <div className='proposition-tag'>Apprendre</div>
                  <div className='proposition-tag'>Comprendre</div>
                  <div className='proposition-tag'>Savoir appliquer</div>
                </section>
              }
            />
            <div className='py-8'>
              <CarouselRef references={nosRef} />
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}
