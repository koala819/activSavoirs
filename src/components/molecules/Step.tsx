import { Text } from "@/src/components/atoms/Text";

export function Step({
  color,
  description,
  number,
  title,
}: {
  color: string;
  description: string;
  number: string;
  title: string;
}) {
  return (
    <section
      className={`${color} w-full rounded-xl flex flex-col items-center p-8 space-y-4`}
    >
      <div className='bg-black rounded-full w-12 h-12 lg:w-24 lg:h-24 flex items-center justify-center mb-8'>
        <Text text={number} className='text-white lg:text-5xl' />
      </div>
      <Text text={title} className='font-extrabold lg:text-2xl' />
      <Text text={description} className='step-description' />
    </section>
  );
}
