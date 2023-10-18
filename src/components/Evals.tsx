"use client";
import { Chip, Image } from "@nextui-org/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { GiIronCross } from "react-icons/gi";

export function Evals({ evals }: { evals: any }) {
  //   console.log("evals", evals);
  console.log("tag", evals[0].tags[0]);

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
      <header className='flex gap-4 mb-12'>
        {uniqueTags.map((ref: any, index: number) => {
          const tag = tags.find((tag) => tag.name === ref.tags[0]);
          if (tag) {
            const Icon = tag.icon;
            return (
              <Chip
                key={index}
                startContent={<Icon size={18} />}
                variant='faded'
                color='primary'
              >
                {ref.tags[0]}
              </Chip>
            );
          }
          return null;
        })}
      </header>
      <div className='grid grid-cols-3 gap-4'>
        {evals.map((evaluation: any, index: number) => (
          <section
            key={index}
            className='max-w-md py-4 px-8 bg-white dark:bg-slate-600 shadow-lg rounded-lg '
          >
            <div
              className='flex items-center'
              // className='flex justify-center md:justify-end -mt-16'
            >
              <Image
                className='w-20 h-20 object-contain rounded-full mr-4 border border-blue-600 p-2'
                alt={evaluation.data.logo.alt}
                src={evaluation.data.logo.url}
              />
              <h2 className='text-gray-800 dark:text-sky-500 text-3xl font-semibold'>
                {evaluation.data.prenom}
              </h2>
            </div>
            <div className='flex  mb-4'>
              {Array.from({ length: evaluation.data.note }).map((_, index) => (
                <FaStar key={index} size={24} className='text-yellow-300' />
              ))}
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
        ))}
      </div>
    </>
  );
}
