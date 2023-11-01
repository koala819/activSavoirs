import { Eval } from "@/src/components/atoms/Eval";

export function Avis({ evals }: any) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
      {evals.map((evaluation: any, index: number) => {
        return <Eval evaluation={evaluation} key={index} />;
      })}
    </div>
  );
}
