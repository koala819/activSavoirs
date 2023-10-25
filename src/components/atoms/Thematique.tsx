import { Text } from "@/src/components/atoms/Text";
import { colorVariants } from "@/src/lib/colorVariants";

export function Thematique({ title, icon }: { icon: any; title: string }) {
  return (
    <section
      className={`py-4 px-2 bg-[#F6F6F6] ${colorVariants[title]} hover:cursor-pointer shadow-lg rounded-lg h-44`}
    >
      <div className='flex justify-end mr-8'>{icon}</div>
      <div className='flex items-end h-2/3 ml-8'>
        <Text text={title} className='text-base font-bold' />
      </div>
    </section>
  );
}
