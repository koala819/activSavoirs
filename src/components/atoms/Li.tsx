export function Li({
  text,
  chooseSection,
  selected,
  onClick,
}: {
  text: string;
  chooseSection: any;
  selected: any;
  onClick: any;
}) {
  const shortText = text.split(" ")[0];

  return (
    <li
      className={`hover:cursor-pointer text-lg capitalize ${
        selected ? "underline hover:cursor-auto" : "no-underline"
      }`}
      onClick={() => {
        chooseSection(shortText);
        onClick(shortText);
      }}
    >
      {text}
    </li>
  );
}
