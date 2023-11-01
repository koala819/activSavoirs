import { Events } from "@/src/components/organisms/Events";
import { Formation } from "@/src/components/organisms/Formation";
import { Mentoring } from "@/src/components/organisms/Mentoring";
import { Sourcing } from "@/src/components/organisms/Sourcing";
import { displayComponents } from "@/src/types/models";
import { NoName } from "@/src/components/atoms/NoName";
import { Supports } from "@/src/components/atoms/Supports";
import { Resultats } from "@/src/components/atoms/Resultats";
import { Avis } from "@/src/components/atoms/Avis";

export function DisplayRightSwitch({
  evals,
  section,
  theme,
}: {
  evals?: any;
  section: string;
  theme?: {
    // avis: { tag: string };
    results: { text: string };
    supports: { text: string }[];
    thematiques: { text: string }[];
  };
}) {
  const displayComponents: displayComponents = {
    events: <Events />,
    formation: <Formation />,
    mentoring: <Mentoring />,
    sourcing: <Sourcing />,
    thématiques: <NoName thematiques={theme?.thematiques || []} />,
    supports: <Supports supports={theme?.supports || []} />,
    résultats: <Resultats resultat={theme?.results.text || ""} />,
    avis: <Avis evals={evals} />,
    // avis: <Avis avis={theme?.avis.tag || ""} />,
  };
  const display = displayComponents[section];

  if (!display) {
    return <div>ERROR</div>;
  }

  return display;
}
