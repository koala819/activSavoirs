import { createClient } from "@/prismicio";
import { Reviews } from "@/src/components/templates/Reviews";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  const evals = await client
    .getByType("evals", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return (
    <div className='text-gray-600 dark:text-gray-100 body-font'>
      <header className='flex flex-col text-center w-full py-12 border-b-2 border-black'>
        <h1 className='text-4xl text-gray-900 tracking-widest font-extrabold '>
          Nos références
        </h1>
      </header>
      <section className='px-4 bg-slate-100 py-8'>
        {evals && evals.results && evals.results.length > 0 ? (
          <Reviews evals={evals.results} />
        ) : (
          notFound()
        )}
      </section>
    </div>
  );
}
