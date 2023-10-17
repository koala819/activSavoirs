import { createClient } from "@/prismicio";
import { Homepage } from "@/components/Homepage";
import { notFound } from "next/navigation";
import { CarouselRef } from "@/components/Caroussel";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil").catch(() => notFound());
  // console.log("video", page.data.video.html);
  const references = await client
    .getByType("references", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return (
    <>
      <Homepage page={page} />
      <CarouselRef references={references.results} />
    </>
  );
}
