import { Events } from "@/src/components/organisms/Events";
import { FourGoals } from "@/src/components/organisms/FourGoals";
import formation from "@/public/images/Formation.png";
import mentoring from "@/public/images/Mentoring.png";
import sourcing from "@/public/images/Sourcing.png";
import { displayComponents } from "@/src/types/models";
import { ThematicList } from "@/src/components/atoms/ThematicList";
import { Supports } from "@/src/components/atoms/Supports";
import { Resultats } from "@/src/components/atoms/Resultats";
import { Advice } from "@/src/components/atoms/Advice";

export function DisplayRightSwitch({
  evals,
  section,
  theme,
}: {
  evals?: any;
  section: string;
  theme?: {
    results: { text: string };
    supports: { text: string }[];
    thematics: { text: string }[];
  };
}) {
  const displayComponents: displayComponents = {
    events: <Events />,
    formation: (
      <FourGoals
        picture={formation}
        title="L'ensemble de nos formations peuvent bénéficier d'un portage QUALIOPI"
        description="L'ingénierie de chaque formation est élaborée par l'auditeur et l'expert pédagogique. Ainsi, chaque formation professionnelle continue est totalement sur-mesure. Nos partenariats vous permettent si besoin, de bénéficier d’un portage QUALIOPI pour optimiser vos investissements RH."
      />
    ),
    mentoring: (
      <FourGoals
        picture={mentoring}
        title="Le complément idéal d'une formation pour optimiser la montée en compétences"
        description="L'ingénierie pédagogique sur-mesure du mentoring individualisé est élaborée avec la DRH et/ou le management du bénéficiaire. Cette action facultative a pour avantages de faciliter l'usage des nouveaux outils et méthodes transmis ainsi que d'accélérer la réalisation des objectifs."
      />
    ),
    sourcing: (
      <FourGoals
        picture={sourcing}
        title="L'externalisation de la recherche de compétences pédagogiques"
        description="Réalisation en présentiel d'un audit du contexte, du besoin, des objectifs pédagogiques et des profils des stagiaires. Lancement de l'action de sourcing sous 48 heures afin de sélectionner l'expert pédagogique le plus adapté pour optimiser l’acquisition et/ou la montée en compétences attendue."
      />
    ),

    thématiques: <ThematicList thematiques={theme?.thematics || []} />,
    supports: <Supports supports={theme?.supports || []} />,
    résultats: <Resultats resultat={theme?.results.text || ""} />,
    avis: <Advice evals={evals} />,
  };
  const display = displayComponents[section];

  if (!display) {
    return <div>ERROR</div>;
  }

  return display;
}
