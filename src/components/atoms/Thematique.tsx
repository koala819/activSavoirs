import { Text } from "@/src/components/atoms/Text";
import { colorVariants } from "@/src/lib/colorVariants";
import Link from "next/link";

export function Thematique({
  icon,
  path,
  title,
}: {
  icon: any;
  path: string;
  title: string;
}) {
  return (
    <Link
      href={path}
      className={`py-4 px-2 bg-[#F6F6F6] ${colorVariants[title]} hover:cursor-pointer shadow-lg rounded-lg h-44`}
    >
      <div className='flex justify-end mr-8'>{icon}</div>
      <div className='flex items-end h-2/3 ml-8'>
        <Text text={title} className='text-base font-bold' />
      </div>
    </Link>
  );
}
