"use client";
import { useState } from "react";
import { ThematiqueFormation } from "@/src/components/organisms/ThematiqueFormation";
import { thematiques } from "@/src/types/thematiques";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function Thematiques({ evaluations }: any) {
  const path = usePathname();
  const index = path.split("/thematiques/")[1];

  const [indexTheme, setIndexTheme] = useState<number>(parseInt(index) || 0);

  const menu = [
    { text: "thématiques abordées" },
    { text: "supports" },
    { text: "résultats" },
    { text: "avis" },
  ];

  const themes = thematiques.map((thematique) => thematique.title);

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

  const tagToFilter = thematiques[indexTheme].advices?.tag;
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
      <aside>
        <Button color='default' variant='light' onClick={handlePrevious}>
          Precedent
        </Button>
      </aside>
      <ThematiqueFormation
        menu={menu}
        evals={displayEvals}
        selected={thematiques[indexTheme]}
      />
      <aside>
        <Button color='default' variant='light' onClick={handleNext}>
          Suivant
        </Button>
      </aside>
    </div>
  );
}
