export function DoubleColumn({
  left,
  right,
  sectionClassName,
  leftClassName,
  rightClassName,
}: {
  left: React.ReactNode;
  right?: React.ReactNode;
  sectionClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <section className={sectionClassName}>
      <aside className={leftClassName}>{left}</aside>
      <aside className={rightClassName}>{right}</aside>
    </section>
  );
}
