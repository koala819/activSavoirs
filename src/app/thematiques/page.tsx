import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Thematiques } from "@/src/components/templates/Thematiques";

export default async function Page() {
  const client = createClient();
  const evals = await client
    .getByType("evals", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  return <Thematiques evaluations={evals} />;
}
