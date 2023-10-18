"use client";
import { Chip, Image } from "@nextui-org/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { GiIronCross } from "react-icons/gi";

export function Evals({ evals }: { evals: any }) {
  const [selectedTag, setSelectedTag] = useState<any | null>(null);
  console.log("selectedTag", selectedTag?.tags[0]);

  const uniqueTags = evals.filter((ref: any, index: number) => {
    const currentTag = ref.tags[0];
    const isUnique =
      evals.findIndex((item: any) => item.tags[0] === currentTag) === index;
    return isUnique;
  });

  const tags = [
    { name: "Développer ses compétences achat", icon: FaShoppingCart },
    { name: "Développer ses compétences accaht", icon: GiIronCross },
  ];

  return (
    <>
      <header className='flex  p-8 w-full space-y-4 flex-col xl:space-x-4 xl:space-y-0 xl:flex-row'>
        {uniqueTags.map((ref: any, index: number) => {
          const tag = tags.find((tag) => tag.name === ref.tags[0]);

          const Icon = tag?.icon;
          const tagClickHandler = () => {
            setSelectedTag(ref);
          };
          return (
            <Chip
              key={index}
              startContent={<Icon size={18} />}
              variant='faded'
              color='primary'
              onClick={tagClickHandler}
              className='hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500 text-xs sm:text-none'
            >
              {ref.tags[0]}
            </Chip>
          );
        })}
        <Chip
          onClick={() => setSelectedTag(null)}
          className='hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500'
          color='primary'
          variant='faded'
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
                <div className='flex items-center'>
                  <Image
                    className='w-16 h-16 object-contain rounded-full mr-4 border border-blue-600 p-2'
                    alt={evaluation.data.logo.alt}
                    src={evaluation.data.logo.url}
                  />
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
