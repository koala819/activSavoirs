import { createClient } from "@/prismicio";
import { Team } from "@/src/components/Team";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  const page = await client.getByType("equipe").catch(() => notFound());

  return (
    <section className='flex items-center justify-center w-full text-gray-600 dark:text-gray-100 body-font  px-5 py-24'>
      <div className='container'>
        <feTile className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest dark:text-gray-100'>
            L’équipe pédagogique de ACTIV&apos;SAVOIRS c’est :
          </h1>
          <div className='flex items-center justify-center'>
            <ul className='text-left leading-relaxed text-base list-disc'>
              <li>Une formidable équipe d&apos;experts passionnés</li>
              <li>Des savoir-faire métier éprouvés</li>
              <li>Une expertise reconnue</li>
              <li>Une dynamique pédagogique plébiscitée</li>
            </ul>
          </div>
        </feTile>
        {page && page.results && page.results.length > 0 ? (
          <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
            {page.results.map((item) => {
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
                </div>
              );
            })}
          </div>
        ) : (
          notFound()
        )}
      </div>
    </section>
  );
}
