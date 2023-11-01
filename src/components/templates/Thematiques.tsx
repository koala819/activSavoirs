"use client";
import { useState } from "react";
import { ThematiqueFormation } from "@/src/components/organisms/ThematiqueFormation";
import { thematiques } from "@/src/types/thematiques";
import { Button } from "@nextui-org/react";

export function Thematiques({ evaluations }: any) {
  const [index, setIndex] = useState(0);
  const menu = [
    { text: "thématiques abordées" },
    { text: "supports" },
    { text: "résultats" },
    { text: "avis" },
  ];

  const theme = [
    "efficaciteManageriale",
    "excellenceIndustrielle",
    "softKills",
    "optimisationRH",
  ];

  function handlePrevious() {
    if (index === 0) {
      setIndex(theme.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index === theme.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className='flex'>
      <aside>
        <Button color='default' variant='light' onClick={handlePrevious}>
          Precedent
        </Button>
      </aside>
      <ThematiqueFormation
        menu={menu}
        evals={evaluations}
        selected={thematiques[theme[index] as keyof typeof thematiques]}
      />
      <aside>
        <Button color='default' variant='light' onClick={handleNext}>
          Suivant
        </Button>
      </aside>
    </div>
  );
}
