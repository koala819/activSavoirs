"use client";
import { Button } from "@nextui-org/react";
import { HeroTitle } from "../atoms/HeroTitle";
import { Text } from "../atoms/Text";

export function Article({
  heroTitle,
  title,
  description,
}: {
  heroTitle?: string;
  title: string;
  description: string;
}) {
  return (
    <div className='w-full md:w-1/2 p-4'>
      <HeroTitle title={heroTitle} />
      <Text text={title} className='title mb-8 mt-4' />
      <Text text={description} className='text-description mb-10' />
      <Button variant='solid' className='black-button'>
        Nous contacter
      </Button>
    </div>
  );
}
