import { createClient } from "@/prismicio";
import { Homepage } from "@/src/components/Homepage/Homepage";
import { notFound } from "next/navigation";
// import { CarouselRef } from "@/src/components/Caroussel";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil").catch(() => notFound());
  // console.log("video", page.data.video.html);
  // const references = await client
  //   .getByType("references", { pageSize: 1000, page: 1 })
  //   .catch(() => notFound());

  return (
    <>
      <Homepage page={page} />
      {/* <CarouselRef references={references.results} /> */}
    </>
  );
}
