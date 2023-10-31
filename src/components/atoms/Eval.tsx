"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function Eval({ evaluation }: { evaluation: any }) {
  return (
    <div className='flex flex-col'>
      <section className='py-4 px-2 bg-white dark:bg-slate-600 shadow-lg rounded-lg'>
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
          {Array.from({ length: evaluation.data.note }).map((_, index) => (
            <FaStar key={index} size={24} className='text-yellow-300' />
          ))}
        </div>
        <div>
          <p className='mt-2 text-gray-600 dark:text-gray-200 '>
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
}
