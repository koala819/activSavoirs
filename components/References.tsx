"use client";
import {
  Card,
  CardHeader,
  // CardBody,
  CardFooter,
  Image,
  // Button,
} from "@nextui-org/react";
import Link from "next/link";
import { ImageField, KeyTextField } from "@prismicio/types";

interface RefProp {
  data: {
    website: any;
    logo: ImageField;
    description: KeyTextField;
    titre: KeyTextField;
  };
}
[];

export function References({ references }: { references: RefProp[] }) {
  console.log("refs", references[0].data);

  return (
    <div className='max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8'>
      <Card
        isFooterBlurred
        className='w-full h-[300px] col-span-12 sm:col-span-5'
      >
        <Link href={references[0].data.website.url} target='_blank'>
          <CardHeader className='absolute z-10 flex-col items-start bg-white/90'>
            {/* <p className='text-tiny text-white/60 uppercase font-bold'>New</p> */}
            <h4 className='text-black font-medium text-2xl'>
              {references[0].data.titre}
            </h4>
          </CardHeader>
        </Link>
        <div className='flex items-center justify-center h-full'>
          <Image
            removeWrapper
            alt='Card example background'
            className='z-0 h-1/4  object-cover'
            src={references[0].data.logo.url || ""}
          />
        </div>
        <CardFooter className='absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
          <div>
            <p className='text-tiny text-white'>
              {references[0].data.description}
            </p>
          </div>
          {/* <Button className='text-tiny' color='primary' radius='full' size='sm'>
            Notify Me
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
