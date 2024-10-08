import Image from "next/image";
import { Text } from "@/src/components/atoms/Text";
import { BiSolidQuoteRight } from "react-icons/bi";

export function ExpertWorld({ expertWorld }: any) {
  return (
    <div className='grid grid-cols-6 gap-4 xl:gap-0'>
      <aside className='col-start-1 col-end-3 md:col-end-2 flex items-center justify-center'>
        <div className='relative'>
          <Image
            src={expertWorld.data.expertavatar.url}
            alt={expertWorld.data.expertavatar.alt}
            width='150'
            height='150'
            className='rounded-full'
          />

          <article className='absolute -top-4 -right-4 bg-blue-bg rounded-full flex items-center justify-center text-white w-12 h-12'>
            <BiSolidQuoteRight />
          </article>
        </div>
      </aside>

      <aside className='col-start-3 md:col-start-2 col-end-7 px-8'>
        <Text text="Mot de l'expert" className='title' />
        {expertWorld.data.sujetmoment.map((ds: any, id: number) => {
          if ("text" in ds) {
            return (
              <div key={id}>
                {ds.text === "" ? (
                  <div className='h-4' />
                ) : (
                  <Text text={ds.text} className='text-black' />
                )}
              </div>
            );
          } else {
            return null;
          }
        })}
      </aside>
    </div>
  );
}
