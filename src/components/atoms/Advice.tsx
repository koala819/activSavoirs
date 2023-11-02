import { Review } from "@/src/components/atoms/Review";

export function Advice({ evals }: any) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {evals.map((evaluation: any, index: number) => {
        return <Review evaluation={evaluation} key={index} />;
      })}
    </div>
  );
}
