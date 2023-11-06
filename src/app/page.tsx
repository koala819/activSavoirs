import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Homepage } from "@/src/components/templates/HomePage";
import { Suspense } from "react";
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
    <Suspense fallback={<p>Chargement...</p>}>
      <Homepage accueil={accueil} evals={evals} references={references} />
    </Suspense>
  );
}
