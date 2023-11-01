export function Li({
  text,
  isSelected,
  onClick,
}: {
  text: string;
  isSelected: boolean;
  onClick: any;
}) {
  return (
    <li
      className={`hover:cursor-pointer text-lg capitalize ${
        isSelected ? "underline hover:cursor-auto" : "no-underline"
      }`}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </li>
  );
}
