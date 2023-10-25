import { Thematique } from "@/src/components/atoms/Thematique";
import { thematiques } from "@/src/lib/thematiques";

export function Thematiques() {
  return (
    <section className='grid sm:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-20 sm:px-8'>
      {thematiques.map((thematique, index) => (
        <Thematique
          key={index}
          title={thematique.name}
          icon={thematique.icon}
        />
      ))}
    </section>
  );
}
