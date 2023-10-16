import { createClient } from "@/prismicio";
import { Homepage } from "@/components/Homepage";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("accueil");
  // console.log("video", page.data.video.html);
  return <Homepage page={page} />;
}
