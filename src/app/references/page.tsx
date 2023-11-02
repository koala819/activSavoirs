import { createClient } from "@/prismicio";
import { References } from "@/src/components/templates/References";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getByType("references", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return (
    <div className='text-gray-600 dark:text-gray-100 body-font bg-blue-bg w-full'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-4xl title-font mb-4 tracking-widest text-gray-100 font-extrabold'>
            Nos clients nous font confiance
          </h1>
        </div>
        {page && page.results && page.results.length > 0 ? (
          <References references={page.results} />
        ) : (
          notFound()
        )}
      </div>
    </div>
  );
}
