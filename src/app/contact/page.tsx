"use client";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";
import toast from "react-hot-toast";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";
import { Stars } from "@/src/components/molecules/Stars";
import { Text } from "@/src/components/atoms/Text";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FormValues } from "@/src/types/models";

export default function Page() {
  const [value, setValue] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const { control, handleSubmit } = useForm<FormValues>();
  const handleSendMail = async (values: FormValues) => {
    const data = {
      email: values.email,
      prenom: values.firstName,
      nom: values.lastName,
      message: values.msg,
      societe: values.society,
      telephone: values.tel,
    };
    console.log("data", data);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        if (response.status === 200) {
          toast.success("Votre message a bien été envoyé");
          //   setHideForm(true);
        } else {
          toast.error("Une erreur s'est produite", response.statusText);
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error);
      });
  };

  return (
    <DoubleColumn
      sectionClassName='dble-clmn-section space-y-0'
      leftClassName='dble-clmn-aside'
      rightClassName='dble-clmn-aside'
      left={
        <aside className='px-4 space-y-8'>
          <Text text='Contactez-nous' className='title' />
          <Text
            text="Echangez avec l'un de nos experts pour voir comment Activ'Savoirs peut vous aider à :"
            className=''
          />
          <ul className='list-decimal list-inside ml-4'>
            <li>Atteindre des objectifs toujours plus élevés</li>
            <li>Redonnez du sens au travail humain</li>
            <li>Développer avec réactivité vos compétences</li>
          </ul>
          <Stars
            beforeStars='Excellent'
            afterStars='4.9/5 avis sur plus de 800'
          />
          <picture className='flex h-16 justify-center space-x-12'>
            <Image
              src='https://images.prismic.io/activsavoirs/fc0aa6c0-cb61-498a-9861-03c3bf6fa3f4_peugeot-logo.png?auto=compress,format'
              alt={"Peugeot Logo"}
              className='object-fill'
              width={90}
              height={90}
            />
            <Image
              src='https://images.prismic.io/activsavoirs/18548879-2afd-442a-a822-e8debccfce91_KFC.png?auto=compress,format'
              alt={"KFC Logo"}
              className='object-contain'
              width={90}
              height={90}
            />
            <Image
              src='https://images.prismic.io/activsavoirs/c4be224f-ae22-4ea9-b30c-d8139c9553e2_IBIS.png?auto=compress,format'
              alt={"Ibis Logo"}
              className='object-fill'
              width={90}
              height={90}
            />
          </picture>
        </aside>
      }
      right={
        <div className='flex items-center justify-center  p-4'>
          <div className='bg-white rounded-md p-3 w-full shadow-xl '>
            <form onSubmit={handleSubmit(handleSendMail)} className='space-y-4'>
              <Controller
                name='society'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    isRequired
                    type='text'
                    variant='bordered'
                    color={undefined}
                    label='Société'
                    id='society'
                    onChange={onChange}
                    value={value}
                    className='max-w-full'
                  />
                )}
              />

              <div className='flex justify-between space-x-2'>
                <Controller
                  name='lastName'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      type='text'
                      color={undefined}
                      variant='bordered'
                      label='Nom'
                      id='lastName'
                      onChange={onChange}
                      value={value}
                      className='max-w-full'
                    />
                  )}
                />

                <Controller
                  name='firstName'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      type='text'
                      color={undefined}
                      variant='bordered'
                      label='Prénom'
                      id='firstName'
                      onChange={onChange}
                      value={value}
                      className='max-w-full'
                    />
                  )}
                />
              </div>

              <div className='flex justify-between space-x-2'>
                <Controller
                  name='email'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      onChange={onChange}
                      value={value}
                      type='email'
                      label='Email'
                      variant='bordered'
                      isInvalid={isInvalid}
                      color={isInvalid ? "danger" : undefined}
                      errorMessage={
                        isInvalid && "Saisissez une adresse mail valide svp"
                      }
                      onValueChange={setValue}
                      className='max-w-xs'
                    />
                  )}
                />

                <Controller
                  name='tel'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      type='tel'
                      color={undefined}
                      variant='bordered'
                      label='Téléphone'
                      id='tel'
                      onChange={onChange}
                      value={value}
                      className='max-w-full'
                    />
                  )}
                />
              </div>

              <Controller
                name='msg'
                control={control}
                defaultValue=''
                render={({ field: { onChange, value } }) => (
                  <Textarea
                    isRequired
                    type='text'
                    color={undefined}
                    variant='bordered'
                    value={value}
                    onChange={onChange}
                    label='Veuillez saisir votre message'
                    autoFocus
                    className='max-w-full'
                  />
                )}
              />

              <Button
                type='submit'
                className='black-button w-full text-center mt-16'
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      }
    />
  );
}
