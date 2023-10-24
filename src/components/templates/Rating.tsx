import { Eval } from "@/src/components/atoms/Eval";
import { Text } from "@/src/components/atoms/Text";
import { RatingLink } from "@/src/components/atoms/RatingLink";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";

export function Rating({ evals }: any) {
  return (
    <section className='mb-12'>
      <DoubleColumn
        left={
          <Text
            text='Un véritable savoir-faire pédagogique plébiscité par nos clients et stagiaires'
            className='title '
          />
        }
        right={<RatingLink beforeEval={true} />}
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 p-4 -mt-12 sm:mt-0'>
        {evals.map((evaluation: any, index: number) => (
          <Eval evaluation={evaluation} key={index} />
        ))}
      </div>
      <RatingLink beforeEval={false} />
    </section>
  );
}
