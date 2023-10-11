import { createClient } from "@/prismicio";
import { Team } from "@/components/Team";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  //   const page = await client.getSingle("equipe").catch(() => notFound());
  const page = await client.getByType("equipe").catch(() => notFound());

  return (
    <div className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
            L’équipe pédagogique de ACTIV&apos; SAVOIRS c’est :
          </h1>
          <ul className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            <li>Une formidable équipe d&apos;experts passionnés</li>
            <li>Des savoir-faire métier éprouvés</li>
            <li>Une expertise reconnue</li>
            <li>Une dynamique pédagogique plébiscitée</li>
          </ul>
        </div>
        {page && page.results && page.results.length > 0
          ? page.results.map((item) => {
              return (
                <div key={item.id}>
                  <title>{item.data.meta_title}</title>
                  <meta
                    name='description'
                    content={item.data.meta_description || ""}
                  />
                  <Team team={[item.data]} />
                </div>
              );
            })
          : notFound()}
      </div>
    </div>
  );
}
