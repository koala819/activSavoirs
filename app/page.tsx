import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil");
  console.log("video", page.data.video.html);
  return (
    <>
      <section className='mt-8 p-8'>
        <h2 className='font-bold'>Mot de l&apos;expert</h2>
        {page.data.sujetmoment.map((ds: any, id: number) => {
          if ("text" in ds) {
            return (
              <div key={id}>
                {ds.text === "" ? <div className='h-4' /> : ds.text}
              </div>
            );
          } else {
            return null;
          }
        })}

        <h2 className='font-bold'>Video</h2>
        <div dangerouslySetInnerHTML={{ __html: page.data.video.html || "" }} />
      </section>
    </>
  );
}
