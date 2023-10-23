"use client";
import { Article } from "@/src/components/molecules/Article";
import sourcing from "../../../public/images/Sourcing.png";

export function Sourcing() {
  return (
    <Article
      image={{ src: sourcing, alt: "sourcing picture" }}
      title='L’externalisation de la recherche de compétences pédagogiques'
      description='Réalisation en présentiel d’un audit du contexte, du besoin, des objectifs pédagogiques et des profils des stagiaires. Lancement de l’action de sourcing sous 48 heures afin de sélectionner l’expert pédagogique le plus adapté pour optimiser l’acquisition et/ou la montée en compétences attendue.'
      button={{ display: true, text: "Contactez-nous" }}
    />
  );
}
