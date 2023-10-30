"use client";
import { Eval } from "@/src/components/atoms/Eval";
import { Text } from "@/src/components/atoms/Text";
import { RatingLink } from "@/src/components/atoms/RatingLink";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export function Rating({ evals }: any) {
  return (
    <ParallaxBanner className='aspect-[2/1]'>
      <ParallaxBannerLayer speed={80} scale={[0, 0.9, "easeOutBack"]}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <section className='mb-12'>
            <DoubleColumn
              sectionClassName='dble-clmn-section'
              leftClassName='dble-clmn-aside space-y-10'
              rightClassName='dble-clmn-aside space-y-10'
              left={
                <Text
                  text='Un véritable savoir-faire pédagogique plébiscité par nos clients et stagiaires'
                  className='title '
                />
              }
              right={<RatingLink beforeEval={true} />}
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 p-4 -mt-12 sm:mt-0'>
              {evals.map((evaluation: any, index: number) => (
                <Eval evaluation={evaluation} key={index} />
              ))}
            </div>
            <RatingLink beforeEval={false} />
          </section>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}
