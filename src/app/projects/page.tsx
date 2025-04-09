import { Metadata } from "next";
import { groq } from "next-sanity";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import client from "../../lib/sanityClient";
import { urlFor } from "../../lib/urlSanity";

import { MotionSlide } from "@/components/Motion";
import { Heading } from "@/components/heading";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos desenvolvidos por mim.",
};

export type ProjectsProps = {
  _id: string;
  name: string;
  description: string;
  slug: string;
  thumbnail: StaticImageData;
};

export default async function Projects() {
  const projects = await client.fetch(groq`*[_type == "project"] {
    _id,
    name, 
    description,
    "slug": slug.current,
    thumbnail
  }`);

  return (
    <div className="max-w-xl px-4">
      <MotionSlide>
        <Heading>Projetos</Heading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects?.map((project: ProjectsProps) => (
            <div className="w-full text-center" key={project._id}>
              <NextLink href={`projects/${project.slug}`}>
                <Image
                  src={urlFor(project.thumbnail)
                    .width(720)
                    .height(420)
                    .quality(90)
                    .url()}
                  alt={project.name}
                  width={720}
                  height={420}
                  quality={90}
                  className="rounded-lg shadow-md shadow-gray-600 transition-all hover:scale-110"
                />
                <h1 className="mt-2 text-xl">{project.name}</h1>
                <p className="text-sm">{project.description}</p>
              </NextLink>
            </div>
          ))}
        </div>
      </MotionSlide>
    </div>
  );
}
