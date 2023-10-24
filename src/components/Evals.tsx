"use client";
import { Chip } from "@nextui-org/react";
import { useState } from "react";
import {
  FaChartBar,
  FaChartLine,
  FaCubes,
  FaBookDead,
  FaFileContract,
  FaHome,
  FaLightbulb,
  FaPhone,
  FaShoppingCart,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { Eval } from "@/src/components/atoms/Eval";

export function Evals({ evals }: { evals: any }) {
  const [selectedTag, setSelectedTag] = useState<any | null>(null);
  // console.log("selectedTag", selectedTag?.tags[0]);

  const uniqueTags = evals.filter((ref: any, index: number) => {
    const currentTag = ref.tags[0];
    const isUnique =
      evals.findIndex((item: any) => item.tags[0] === currentTag) === index;
    return isUnique;
  });

  const tags = [
    { name: "Développer ses compétences achat", icon: FaShoppingCart },
    {
      name: "Maîtriser la prospection immobilière de terrain",
      icon: FaHome,
    },
    { name: "Piges et prospection téléphonique", icon: FaPhone },
    {
      name: "Savoir vendre avec efficacité le mandat exclusif",
      icon: FaFileContract,
    },
    {
      name: "Maîtriser les fondamentaux du management d'une direction régionale",
      icon: FaUsers,
    },
    {
      name: "Savoir optimiser son efficacité commerciale",
      icon: FaChartLine,
    },
    {
      name: "Les fondamentaux de la performance commerciale",
      icon: FaTrophy,
    },
    {
      name: "La performance commerciale",
      icon: FaChartBar,
    },
    {
      name: "Savoir développer son efficacité commerciale",
      icon: FaLightbulb,
    },
    {
      name: undefined,
      icon: FaBookDead,
    },
  ];

  return (
    <>
      <header className='w-full space-y-4 xl:space-y-2 mb-8'>
        {uniqueTags.map((ref: any, index: number) => {
          const tag = tags.find((tag) => {
            // Si vous avez une erreuur Check the render method of `Evals`
            // c'est que vous utilisez un tag qui n'est pas défini
            // comment startContent={<Icon size={18} />} on <Chip />
            // check with console each tag
            // console.log("tag", ref.tags[0]);
            return tag.name === ref.tags[0];
          });

          const Icon = tag?.icon;

          const tagClickHandler = () => {
            setSelectedTag(ref);
          };

          return (
            <Chip
              key={index}
              startContent={<Icon size={18} />}
              variant='faded'
              color={ref.tags[0] === undefined ? "danger" : "primary"}
              onClick={tagClickHandler}
              className='hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500 text-xs sm:text-sm mr-4'
            >
              {ref.tags[0] === undefined ? "UNDEFINED" : ref.tags[0]}
            </Chip>
          );
        })}

        <Chip
          onClick={() => setSelectedTag(null)}
          startContent={<FaCubes size={18} />}
          color='primary'
          variant='faded'
          className='hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500 text-xs sm:text-sm'
        >
          Tous les modules
        </Chip>
      </header>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {evals.map((evaluation: any, index: number) => {
          if (
            selectedTag?.tags[0] &&
            evaluation.tags[0] !== selectedTag?.tags[0]
          ) {
            return null;
          }

          return (
            <div key={index} className='flex items-center justify-center'>
              <Eval evaluation={evaluation} />
            </div>
          );
        })}
      </div>
    </>
  );
}
