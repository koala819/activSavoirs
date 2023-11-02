export function ThematicList({
  thematiques,
}: {
  thematiques: { text: string }[];
}) {
  return (
    <ul>
      {thematiques.map((thematique: { text: any }) => (
        <li key={thematique.text}>{thematique.text}</li>
      ))}
    </ul>
  );
}
