import { createClient } from "@/prismicio";
import { References } from "@/components/References";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  const page = await client.getByType("references").catch(() => notFound());

  return (
    <div className='text-gray-600 dark:text-gray-100 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest dark:text-gray-100'>
            Nos références
          </h1>
        </div>
        {page && page.results && page.results.length > 0 ? (
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <References references={page.results} />
            {/* {page.results.map((item) => {
              return (
                <div
                  key={item.id}
                  className='flex items-center justify-center m-1'
                >
                  <title>{item.data.meta_title}</title>
                  <meta
                    name='description'
                    content={item.data.meta_description || ""}
                  />
                  <Team team={[item.data]} />
                  DISPLAY REFS
                </div>
              );
            })} */}
          </div>
        ) : (
          notFound()
        )}
      </div>
    </div>
  );
}
