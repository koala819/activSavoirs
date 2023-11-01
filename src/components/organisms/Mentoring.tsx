"use client";
import { Article } from "@/src/components/molecules/Article";
import mentoring from "@/public/images/Mentoring.png";

export function Mentoring() {
  return (
    <Article
      image={{ src: mentoring, alt: "mentoring picture" }}
      title='Le complément idéal d’une formation pour optimiser la montée en compétences'
      description='L’ingénierie pédagogique sur-mesure du mentoring individualisé est élaborée avec la DRH et/ou le management du bénéficiaire. Cette action facultative a pour avantages de faciliter l’usage des nouveaux outils et méthodes transmis ainsi que d’accélérer la réalisation des objectifs.'
      button={{ display: true, text: "Contactez-nous" }}
    />
  );
}
