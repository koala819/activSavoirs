export function Supports({ supports }: { supports: { text: string }[] }) {
  return (
    <ul>
      {supports.map((support: { text: any }) => (
        <li key={support.text}>{support.text}</li>
      ))}
    </ul>
  );
}
