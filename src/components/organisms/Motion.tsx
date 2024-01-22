'use client'

import { CarouselRef } from '@/src/components/atoms/Caroussel'
import { Article } from '@/src/components/molecules/Article'
import { DoubleColumn } from '@/src/components/molecules/DoubleColumn'

export function Motion({ nosRef }: { nosRef: any }) {
  return (
    <section className="w-full">
      <DoubleColumn
        sectionClassName="dble-clmn-section"
        leftClassName="dble-clmn-aside space-y-10"
        rightClassName="dble-clmn-aside space-y-10"
        left={
          <Article
            title="Savoir définir et actionner vos besoins de compétences actuels et à venir."
            description="Créé en 2009 notre organisme de formation professionnelle continue a pour principal objectif de vous aider à optimiser la gestion des RH.
        Nos méthodes pédagogiques sont plébiscitées par nos clients et stagiaires."
            button={{ display: false }}
          />
        }
        right={
          <section className="flex flex-col space-y-8 justify-center w-full items-center h-full">
            <div className="proposition-tag">Apprendre</div>
            <div className="proposition-tag">Comprendre</div>
            <div className="proposition-tag">Savoir appliquer</div>
          </section>
        }
      />
      <h2 className="title text-lg md:text-xl pl-12">
        Ils nous ont fait confiance
      </h2>
      <div className="py-8">
        <CarouselRef partners={nosRef} />
      </div>
    </section>
  )
}
