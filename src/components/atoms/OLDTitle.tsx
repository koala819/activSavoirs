export function Title({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  const combinedClasses = `font-black sm:text-5xl md:text-2xl ${className}`;

  return <h1 className={combinedClasses}>{title}</h1>;
}
