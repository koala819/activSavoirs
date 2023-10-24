import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Hero } from "@/src/components/templates/Hero";
import { Proposition } from "@/src/components/templates/Proposition";
import { Services } from "@/src/components/templates/Services";
import { Steps } from "@/src/components/templates/Steps";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil").catch(() => notFound());
  return (
    <div>
      <Hero page={page} />
      <Proposition />
      <Services />
      <Steps />
    </div>
  );
}
