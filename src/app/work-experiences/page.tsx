import { Metadata } from "next";
import { groq } from "next-sanity";
import client from "../../lib/sanityClient";

import { Experience } from "@/components/experience";

export const metadata: Metadata = {
  category: "Experience",
  creator: "Isaque de Sousa",
  title: "Experiência",
  description:
    "Todas minhas experiências profissionais, projetos e trabalhos realizados.",
  keywords: [
    "Isaque de Sousa",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor FullStack",
    "Web Developer",
    "Front-end Developer",
    "FullStack Developer",
    "Brazil",
    "Next.js",
  ],
};

export default async function WorkExperiencePage() {
  const [experiences] = await client.fetch(groq`*[_type == "experiences"]`);

  return (
    <div className="max-w-4xl px-4">
      {/* @ts-expect-error Server Component */}
      <Experience experiences={experiences} />
    </div>
  );
}
