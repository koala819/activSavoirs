"use client";
import { Chip } from "@nextui-org/react";
import { useState } from "react";
import { FaCubes } from "react-icons/fa";
import { tags } from "@/src/types/tags";
import { Review } from "@/src/components/atoms/Review";

export function Reviews({ evals }: { evals: any }) {
  const [selectedTag, setSelectedTag] = useState<any | null>(null);
  // console.log("selectedTag", selectedTag?.tags[0]);

  const uniqueTags = evals.filter((ref: any, index: number) => {
    const currentTag = ref.tags[0];
    const isUnique =
      evals.findIndex((item: any) => item.tags[0] === currentTag) === index;
    return isUnique;
  });

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

          const Icon: any = tag?.icon;

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
              className={
                selectedTag?.tags[0] === ref.tags[0]
                  ? "bg-blue-500 border-blue-500 text-white cursor-default  mr-4"
                  : "hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500 text-xs sm:text-sm mr-4"
              }
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

          return <Review evaluation={evaluation} key={index} />;
        })}
      </div>
    </>
  );
}
