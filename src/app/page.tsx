import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Hero } from "@/src/components/templates/Hero";
import { Proposition } from "@/src/components/templates/Proposition";
import { Services } from "@/src/components/templates/Services";
import { Steps } from "@/src/components/templates/Steps";
import { Rating } from "@/src/components/templates/Rating";
import { CTA } from "@/src/components/templates/CTA";
import { Thematiques } from "@/src/components/templates/Thematiques";

export default async function Page() {
  const client = createClient();
  const accueil = await client.getSingle("accueil").catch(() => notFound());
  const evals = await client
    .getByType("evals", { pageSize: 3, page: 1 })
    .catch(() => notFound());
  const references = await client
    .getByType("references", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return (
    <div className='flex flex-col items-center justify-center '>
      <Hero accueil={accueil} />
      <Thematiques />
      <Proposition nosRef={references.results} />
      <Services />
      <Steps />
      <Rating evals={evals.results} />
      <CTA />
    </div>
  );
}
