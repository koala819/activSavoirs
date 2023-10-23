import { Text } from "@/src/components/atoms/Text";

export function WhiteBox({
  number,
  text,
  className,
}: {
  number: number;
  text: string;
  className: string;
}) {
  return (
    <section
      className={`absolute flex flex-col text-center bg-white p-2 sm:p-4 border-2 rounded-xl z-10 ${className}`}
    >
      <Text text={number.toString()} className='white-box-nb-txt' />
      <Text text={text} className='white-box-txt' />
    </section>
  );
}
