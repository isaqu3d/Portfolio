import { Heading } from "@components/Heading";
import { MotionTitle } from "@components/Motion";
import { Metadata } from "next";
import { groq } from "next-sanity";
import Image from "next/image";
import NextLink from "next/link";
import builderImage from "../../lib/imageSanity";
import client from "../../lib/sanityClient";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Venha olhar alguns projetos que eu fiz com ❤️",
};

export default async function Projects() {
  const projects = await client.fetch(groq`*[_type == "project"] {
    _id,
    name, 
    description,
    "slug": slug.current,
    thumbnail
  }`);

  function urlFor(source) {
    return builderImage.image(source);
  }

  return (
    <div className="max-w-xl px-4">
      <MotionTitle>
        <Heading>Projetos</Heading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
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
      </MotionTitle>
    </div>
  );
}
