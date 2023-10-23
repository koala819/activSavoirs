"use client";
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
    <>
      <HeroTitle title={heroTitle} />
      <Text text={title} className='title mb-8 mt-4' />
      <Text text={description} className='text-description' />
    </>
  );
}
