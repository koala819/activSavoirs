import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Hero } from "@/src/components/pages/Hero";
import { Proposition } from "@/src/components/pages/Proposition";
import { Services } from "@/src/components/pages/Services";
import { Steps } from "@/src/components/pages/Steps";

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
