"use client";
import { Article } from "@/src/components/molecules/Article";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";
import { Stars } from "@/src/components/molecules/Stars";
import { YouTube } from "@/src/components/molecules/YouTube";
// import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
export function Hero({ accueil }: { accueil: any }) {
  return (
    // <ParallaxBanner className='aspect-[2/1]'>
    //   <ParallaxBannerLayer speed={80} scale={[0, 1, "easeOutBack"]}>
    //     <div className='absolute inset-0 flex items-center justify-center'>
    <div>
      <DoubleColumn
        sectionClassName='dble-clmn-section space-y-0'
        leftClassName='dble-clmn-aside space-y-10'
        rightClassName='dble-clmn-aside space-y-10'
        left={
          <Article
            overline='activateur de Compétences'
            title='Développer l’agilité et la flexibilité de votre entreprise par la
montée en compétences de vos collaborateurs'
            description='Nos actions de formation à forte valeur ajoutée ont pour objectifs
    de contribuer à l’efficacité et à la compétitivité de votre
    entreprise.'
            button={{ display: true, text: "Nous contacter" }}
          />
        }
        right={<YouTube video={accueil} />}
      />
      <footer className='flex justify-center mt-4 sm:mt-0'>
        <Stars
          beforeStars='Excellent'
          afterStars='4.9/5 avis sur plus de 800'
        />
      </footer>
    </div>
    //     </div>
    //   </ParallaxBannerLayer>
    // </ParallaxBanner>
  );
}
