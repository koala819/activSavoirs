export function DoubleColumn({
  left,
  right,
  className,
}: {
  left: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`md:flex sm:p-8 md:space-x-8 space-y-0 ${className}`}>
      <aside className='flex flex-col space-y-10 p-4 w-full md:w-1/2'>
        {left}
      </aside>
      <aside className='flex flex-col space-y-10 p-4 w-full md:w-1/2 '>
        {right}
      </aside>
    </section>
  );
}
