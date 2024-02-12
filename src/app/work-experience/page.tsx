import { Experience } from "@/components/Experience";
import { groq } from "next-sanity";
import client from "../../lib/sanityClient";

export default async function WorkExperiencePage() {
  const [experiences] = await client.fetch(groq`*[_type == "experiences"]`);

  return (
    <div className="max-w-4xl px-4">
      {/* @ts-expect-error Server Component */}
      <Experience experiences={experiences} />
    </div>
  );
}
