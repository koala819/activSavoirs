"use client";
import { Article } from "@/src/components/molecules/Article";
import events from "@/public/images/Events.png";

export function Events() {
  return (
    <Article
      image={{ src: events, alt: "events picture" }}
      title='Capitaliser sur la dynamique et l’intelligence collective'
      description='Vincent Declercq, le dirigeant fondateur de Activ’ Savoirs anime tous types d’événements d’entreprise : Convention – Séminaire – Incentive – Conférence
        Les thématiques : Le management stratégique, de transition et opérationnel.
        La performance commerciale, la dynamique et l’intelligence collective
        Totalement sur-mesure, ces prestations sont co-construites avec le TOP Management'
      button={{ display: true, text: "Contactez-nous" }}
    />
  );
}
