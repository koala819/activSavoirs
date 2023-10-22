export function Text({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  // const combinedClasses = `text-xs sm:text-xl text-gray-500 italic ${className}`;

  return (
    <p
      // className={`text-xs sm:text-xl text-gray-500 italic ${className}`}
      className={className}
    >
      {text}
    </p>
  );
}
