"use client";
import { useState } from "react";
import { Thematic } from "@/src/components/organisms/Thematic";
import { thematics } from "@/src/types/thematics";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { GrPrevious, GrNext } from "react-icons/gr";

export function Thematics({ evaluations }: any) {
  const path = usePathname();
  const index = path.split("/thematiques/")[1];

  const [indexTheme, setIndexTheme] = useState<number>(parseInt(index) || 0);

  const menu = [
    { text: "thématiques abordées" },
    { text: "supports" },
    { text: "résultats" },
    { text: "avis" },
  ];

  const themes = thematics.map((thematique) => thematique.title);

  function handlePrevious() {
    if (indexTheme === 0) {
      setIndexTheme(themes.length - 1);
    } else {
      setIndexTheme(indexTheme - 1);
    }
  }

  function handleNext() {
    if (indexTheme === themes.length - 1) {
      setIndexTheme(0);
    } else {
      setIndexTheme(indexTheme + 1);
    }
  }

  const tagToFilter = thematics[indexTheme].advices?.tag;
  const evalsWithTag = evaluations.results.filter((evaluation: any) => {
    return evaluation.tags[0] === tagToFilter;
  });

  const displayEvals: any[] = [];
  evalsWithTag.map((evaluation: any) => {
    displayEvals.push(evaluation);
  });

  // console.log("displayEvals", displayEvals);

  return (
    <div className='flex'>
      <aside className='absolute mt-20 md:mt-24 md:ml-32 z-50'>
        <Button
          color='default'
          variant='light'
          onClick={handlePrevious}
          startContent={<GrPrevious />}
        >
          Precedent
        </Button>
      </aside>
      <Thematic
        menu={menu}
        evals={displayEvals}
        selected={thematics[indexTheme]}
      />
      <aside className='absolute mt-20 md:mt-24 md:pr-32 w-full flex justify-end'>
        <Button
          color='default'
          variant='light'
          onClick={handleNext}
          endContent={<GrNext />}
        >
          Suivant
        </Button>
      </aside>
    </div>
  );
}
