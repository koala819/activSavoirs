import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Hero } from "@/src/components/Homepage/Hero";
import { Proposition } from "@/src/components/Homepage/Proposition";

export async function Homepage() {
  const client = createClient();
  const page = await client.getSingle("accueil").catch(() => notFound());
  return (
    <>
      <Hero page={page} />
      <Proposition />
    </>
  );
}
