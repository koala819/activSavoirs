"use client";
import { Article } from "@/src/components/molecules/Article";
import formation from "@/public/images/Formation.png";

export function Formation() {
  return (
    <Article
      image={{ src: formation, alt: "formation picture" }}
      title='L’ensemble de nos formations peuvent bénéficier d’un portage QUALIOPI'
      description='L’ingénierie de chaque formation est élaborée par l’auditeur et l’expert pédagogique. Ainsi, chaque formation professionnelle continue est totalement sur-mesure. Nos partenariats vous permettent si besoin, de bénéficier d’un portage QUALIOPI pour optimiser vos investissements RH.'
      button={{ display: true, text: "Contactez-nous" }}
    />
  );
}
