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
      className={`capitalize ${
        isSelected
          ? "hover:cursor-default text-3xl text-blue-bg font-extrabold"
          : "hover:cursor-pointer text-lg font-bold"
      }`}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </li>
  );
}
