"use client";
import { Card, Image } from "@nextui-org/react";
import { RefProp } from "@/src/types/models";

export function References({ references }: { references: RefProp[] }) {
  references.sort((a, b) => {
    if (a.data.titre !== null && b.data.titre !== null) {
      return a.data.titre.localeCompare(b.data.titre);
    }
    return 0;
  });

  // function capitalizeFirstLetter(title: string) {
  //   if (!title) return title;

  //   return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  // }

  return (
    <div className='gap-6 grid grid-cols-12'>
      {references.map((ref, index) => (
        <Card
          key={index}
          isPressable
          isFooterBlurred
          onPress={() => window.open(ref.data.website.url || "", "_blank")}
          className='w-full h-[300px] col-span-12 sm:col-span-3'
        >
          {/* <CardHeader className='absolute z-10 flex-col'>
            <h4
              className='text-black dark:text-white font-medium text-2xl lowercase'
              style={{ textTransform: "capitalize" }}
            >
              {capitalizeFirstLetter(`${ref.data.titre}`)}
            </h4>
          </CardHeader> */}

          <div className='flex items-center justify-center h-full'>
            <Image
              removeWrapper
              alt='Card example background'
              className='z-0 h-1/2 object-fill p-1'
              src={ref.data.logo.url || ""}
            />
          </div>
          {/* <CardFooter className='absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
            <div>
              <p className='text-tiny text-white'>{ref.data.description}</p>
            </div>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
