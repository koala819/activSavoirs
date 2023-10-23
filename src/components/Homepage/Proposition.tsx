import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { Article } from "../molecules/Article";
import { DoubleColumn } from "../organisms/DoubleColumn";
import { CarouselRef } from "@/src/components/Caroussel";

export async function Proposition() {
  const client = createClient();

  const references = await client
    .getByType("references", { pageSize: 1000, page: 1 })
    .catch(() => notFound());
  return (
    <>
      <DoubleColumn
        left={
          <Article
            title='Savoir définir et actionner vos besoins de compétences actuels et à venir.'
            description='Créé en 2009 notre organisme de formation professionnelle continue a pour principal objectif de vous aider à optimiser la gestion des ressources RH.
        Nos méthodes pédagogiques sont plébiscitées par nos clients et stagiaires.'
          />
        }
        right={
          <div className='flex flex-col space-y-8 justify-center h-full'>
            <div className='proposition-tag'>Apprendre</div>
            <div className='proposition-tag'>Comprendre</div>
            <div className='proposition-tag'>Savoir appliquer</div>
          </div>
        }
      />

      <CarouselRef references={references.results} />
    </>
  );
}
