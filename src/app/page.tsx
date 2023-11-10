import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Homepage } from "@/src/components/templates/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activ'Savoirs - Activateur de Compétences pour Entreprises Agile",
  description:
    "Renforcez la compétitivité de votre entreprise avec Activ'Savoirs. Nous proposons des actions de formation ciblées pour améliorer l'efficacité et l'agilité de vos équipes. Explorez nos solutions de montée en compétences.",
};

export default async function Page() {
  const client = createClient();
  const accueil = await client.getSingle("accueil").catch(() => notFound());
  const evals = await client
    .getByType("evals", { pageSize: 3, page: 1 })
    .catch(() => notFound());
  const references = await client
    .getByType("references", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return <Homepage accueil={accueil} evals={evals} references={references} />;
}
