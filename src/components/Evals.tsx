"use client";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
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
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

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
              <section
                key={index}
                className='max-w-md py-4 px-2 bg-white dark:bg-slate-600 shadow-lg rounded-lg '
              >
                <div className='flex items-center mb-4'>
                  <div className='w-full'>
                    <Image
                      width={100}
                      height={100}
                      alt={evaluation.data.logo.alt}
                      src={evaluation.data.logo.url}
                    />
                  </div>

                  <div className='flex justify-end w-full'>
                    <h2 className='text-gray-800 dark:text-sky-500 text-xl font-semibold'>
                      {evaluation.data.prenom}
                    </h2>
                  </div>
                </div>
                <div className='flex  mb-4'>
                  {Array.from({ length: evaluation.data.note }).map(
                    (_, index) => (
                      <FaStar
                        key={index}
                        size={24}
                        className='text-yellow-300'
                      />
                    )
                  )}
                </div>
                <div>
                  <p className='mt-2 text-gray-600 dark:text-gray-200'>
                    {evaluation.data.avis[0].text}
                  </p>
                </div>
                <div className='flex mt-4'>
                  {format(new Date(evaluation.data.date), "dd LLLL yyyy", {
                    locale: fr,
                  })}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}
