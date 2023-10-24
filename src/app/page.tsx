import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Hero } from "@/src/components/templates/Hero";
import { Proposition } from "@/src/components/templates/Proposition";
import { Services } from "@/src/components/templates/Services";
import { Steps } from "@/src/components/templates/Steps";
import { Rating } from "@/src/components/templates/Rating";
import { Article } from "@/src/components/molecules/Article";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil").catch(() => notFound());
  const evals = await client
    .getByType("evals", { pageSize: 3, page: 1 })
    .catch(() => notFound());

  return (
    <div>
      <Hero page={page} />
      <Proposition />
      <Services />
      <Steps />
      <Rating evals={evals.results} />
      <footer className='flex flex-col items-center mb-24'>
        <Article
          title='Parce que les savoirs sont une source d’épanouissement et de réalisation professionnel, développer les compétences de vos collaborateurs ! '
          button={{ display: true, text: "Nous contacter" }}
        />
      </footer>
    </div>
  );
}
