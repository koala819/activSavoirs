"use client";
import { Article } from "@/src/components/molecules/Article";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";
import { Stars } from "@/src/components/molecules/Stars";
import { YouTube } from "@/src/components/molecules/YouTube";

export function Hero({ page }: { page: any }) {
  return (
    <>
      <DoubleColumn
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
        right={<YouTube video={page} />}
      />
      <footer className='flex justify-center'>
        <Stars
          beforeStars='Excellent'
          afterStars='4.9/5 avis sur plus de 800'
        />
      </footer>
    </>
  );
}
