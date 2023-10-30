"use client";
import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";

export function CTA() {
  return (
    <section className='w-full'>
      <div className='flex flex-col items-center space-y-8'>
        <Text
          text='Parce que les savoirs sont une source d’épanouissement et de réalisation professionnel, développer les compétences de vos collaborateurs ! '
          className='title'
        />
        <Button
          text='Nous contacter'
          className='black-button'
          link='/contact'
        />
      </div>
    </section>
  );
}
