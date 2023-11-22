"use client";
import { Step } from "@/src/components/molecules/Step";
import { Text } from "@/src/components/atoms/Text";
import { Button } from "@/src/components/atoms/Button";

export function Steps() {
  return (
    <section className='w-full'>
      <div className='flex flex-col items-center py-8'>
        <Text text='Notre méthode de collaboration' className='title mb-12' />
        <nav className='space-y-4 md:space-y-0 md:flex md:space-x-2 px-8 mb-8'>
          <Step
            color='bg-step-one-bg'
            description='Réalisation d’audit en présentiel pour étudier le contexte, le besoin, le profil des bénéficiaires et les objectifs pédagogiques.'
            number='01'
            title='L’audit'
          />
          <Step
            color='bg-step-two-bg'
            description='L’auditeur et l’expert pédagogique vont élaborer au minimum deux détails de programmes sur-mesure.'
            number='02'
            title='L’ingénierie pédagogique'
          />
          <Step
            color='bg-step-three-bg'
            description='En présentiel ou en distanciel l’auditeur vous présente les offres pour valider ou ajuster l’adéquation avec vos besoins pédagogiques.'
            number='03'
            title='L’étude des offres'
          />
          <Step
            color='bg-step-four-bg'
            description='A l’issue de la validation des offres, l’auditeur organisera avec vous le rétroplanning adapté à vos besoins opérationnels.'
            number='04'
            title='L’organisation'
          />
        </nav>
        <Button
          text='Nous contacter'
          className='black-button'
          link='/contact'
        />
      </div>
    </section>
  );
}
