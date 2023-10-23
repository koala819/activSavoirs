"use client";
import { Button } from "@nextui-org/react";
import { Article } from "../molecules/Article";
import { DoubleColumn } from "../organisms/DoubleColumn";
import { Stars } from "../molecules/Stars";
import { YouTube } from "../molecules/YouTube";

export function Hero({ page }: { page: any }) {
  return (
    <>
      <DoubleColumn
        left={
          <>
            <Article
              heroTitle='activateur de Compétences'
              title='Développer l’agilité et la flexibilité de votre entreprise par la
montée en compétences de vos collaborateurs'
              description='Nos actions de formation à forte valeur ajoutée ont pour objectifs
    de contribuer à l’efficacité et à la compétitivité de votre
    entreprise.'
            />
            <div>
              <Button variant='solid' className='black-button'>
                Nous contacter
              </Button>
            </div>
          </>
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
