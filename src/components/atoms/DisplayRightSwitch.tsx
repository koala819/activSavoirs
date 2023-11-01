import { Events } from "@/src/components/organisms/Events";
import { Formation } from "@/src/components/organisms/Formation";
import { Mentoring } from "@/src/components/organisms/Mentoring";
import { Sourcing } from "@/src/components/organisms/Sourcing";
import { displayComponents } from "@/src/types/models";

export function DisplayRightSwitch({ section }: { section: string }) {
  const displayComponents: displayComponents = {
    events: <Events />,
    formation: <Formation />,
    mentoring: <Mentoring />,
    sourcing: <Sourcing />,
  };
  const display = displayComponents[section];

  if (!display) {
    return <div>ERROR</div>;
  }

  return display;
}
