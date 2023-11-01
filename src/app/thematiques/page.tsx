import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { EfficaciteManageriale } from "@/src/components/templates/EfficaciteManageriale";
import { thematiques } from "@/src/types/thematiques";

export default async function Page() {
  const client = createClient();
  const evals = await client
    .getByType("evals", { pageSize: 1000, page: 1 })
    .catch(() => notFound());

  const tagToFilter = thematiques.efficaciteManageriale?.advices?.tag;
  const evalsWithTag = evals.results.filter((evaluation) => {
    return evaluation.tags[0] === tagToFilter;
  });

  const displayEvals: any[] = [];
  evalsWithTag.map((evaluation) => {
    displayEvals.push(evaluation);
  });

  // console.log("displayEvals", displayEvals);
  const menu = [
    { text: "thématiques abordées" },
    { text: "supports" },
    { text: "résultats" },
    { text: "avis" },
  ];

  return <EfficaciteManageriale menu={menu} evals={displayEvals} />;
}
