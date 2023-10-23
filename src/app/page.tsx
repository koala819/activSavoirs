import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Hero } from "@/src/components/Hero";
import { Proposition } from "@/src/components/Proposition";
import { Services } from "@/src/components/Services";
export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil").catch(() => notFound());
  return (
    <div>
      <Hero page={page} />
      <Proposition />
      <Services />
    </div>
  );
}
