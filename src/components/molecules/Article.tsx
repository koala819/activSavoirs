"use client";
import { Button, Image } from "@nextui-org/react";
import { Text } from "@/src/components/atoms/Text";

export function Article({
  button,
  description,
  image,
  overline,
  title,
}: {
  button: { display: boolean; text?: string };
  description: string;
  image?: { src: { src: string; height: number; width: number }; alt: string };
  overline?: string;
  title: string;
}) {
  return (
    <>
      {overline ? (
        <Text text={overline} className='text-xs sm:text-base uppercase' />
      ) : null}
      {image ? <Image src={image?.src.src} alt={image.alt} /> : null}
      <Text text={title} className='title mb-8 mt-4' />
      <Text text={description} className='text-description' />
      {button.display ? (
        <div>
          <Button variant='solid' className='black-button'>
            {button.text}
          </Button>
        </div>
      ) : null}
    </>
  );
}
