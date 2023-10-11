import { createClient } from "@/prismicio";
import { Team } from "@/components/Team";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("equipe");

  return <Team team={page.data} />;
}
