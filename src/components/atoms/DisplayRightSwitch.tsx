import { Events } from "@/src/components/organisms/Events";
import { Training } from "@/src/components/organisms/Training";
import { Mentoring } from "@/src/components/organisms/Mentoring";
import { Sourcing } from "@/src/components/organisms/Sourcing";
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
    formation: <Training />,
    mentoring: <Mentoring />,
    sourcing: <Sourcing />,
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
