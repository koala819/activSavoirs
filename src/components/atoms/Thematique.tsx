import { Text } from "@/src/components/atoms/Text";

export function Thematique({ title, icon }: { icon: any; title: string }) {
  const colorVariants: { [key: string]: string } = {
    "Stratégie d'entreprise": "hover:bg-[#C7B4FF]",
    "Intelligence Artificielle": "hover:bg-[#FF9C64]",
    "Excellence Industrielle 4.0": "hover:bg-[#FFEA9E]",
    "Optimisation des Ressources Humaines": "hover:bg-[#B9C0FF]",
    "Efficacité Manageriale": "hover:bg-[#D994FA]",
    "Performance Commerciale": "hover:bg-[#E3FF92]",
    "Marketing Digital": "hover:bg-[#FFB9E7]",
    "Qualité et environnement": "hover:bg-[#81D6A8]",
    "Soft Kills": "hover:bg-[#D1E4E2]",
  };
  return (
    <div className='flex flex-col p-10'>
      <section
        className={`py-4 px-2 bg-[#F6F6F6] ${colorVariants[title]} hover:cursor-pointer shadow-lg rounded-lg h-44`}
      >
        <div className='flex justify-end mr-8'>{icon}</div>
        <div className='flex items-end h-2/3 ml-8'>
          <Text text={title} className='text-base font-bold' />
        </div>
      </section>
    </div>
  );
}
