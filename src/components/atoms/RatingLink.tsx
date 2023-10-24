import Link from "next/link";
import { Text } from "@/src/components/atoms/Text";

export function RatingLink({ beforeEval }: { beforeEval: boolean }) {
  return (
    <div
      className={
        beforeEval
          ? "hidden sm:flex md:justify-end md:mr-16 md:items-center md:h-full"
          : "sm:hidden w-full flex justify-center"
      }
    >
      <Link href='/evaluations'>
        <Text
          text='Découvrez les avis de nos clients'
          className='step-description hover:underline'
        />
      </Link>
    </div>
  );
}
