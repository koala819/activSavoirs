import { Text } from "@/src/components/atoms/Text";
export function ThematicList({
  thematiques,
}: {
  thematiques: { text: string }[];
}) {
  return (
    <ul className='space-y-4'>
      {thematiques.map((thematique: { text: any }) => (
        <li key={thematique.text}>
          <Text text={thematique.text} className='text-description' />
        </li>
      ))}
    </ul>
  );
}
