import { createClient } from "@/prismicio";
import { Evals } from "@/src/components/Evals";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  const evals = await client
    .getByType("evals", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return (
    <div className='text-gray-600 dark:text-gray-100 body-font mb-12 p-4'>
      <header className='flex flex-col text-center w-full mb-20'>
        <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest dark:text-gray-100'>
          Wall of love
        </h1>
        <p>Découvrez les potins que mes clients diffusent sur moi 😀 !</p>
      </header>
      {evals && evals.results && evals.results.length > 0 ? (
        <Evals evals={evals.results} />
      ) : (
        notFound()
      )}
    </div>
  );
}
