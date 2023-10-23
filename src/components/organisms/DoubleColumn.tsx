export function DoubleColumn({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <section className='md:flex mt-8 p-8 md:space-x-8 space-y-8 md:space-y-0'>
      <aside className='flex flex-col space-y-10 p-4 w-full md:w-1/2'>
        {left}
      </aside>
      <aside className='flex flex-col space-y-10 p-4 w-full md:w-1/2'>
        {right}
      </aside>
    </section>
  );
}
