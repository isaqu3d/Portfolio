import { LinkSanity } from "@components/LinkSanity";
import { MotionTitle } from "@components/Motion";
import { NextLinkColor } from "@components/NextLinkColor";

import { TechBadge } from "@components/TechBadge";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import client from "../../../lib/sanityClient";
import { urlFor } from "../../../lib/urlSanity";

export async function generateStaticParams() {
  const projects = await client.fetch(groq`*[_type == "project"]`);

  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export default async function Slug({ params: { slug } }) {
  const [project] = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug]`,
    {
      slug,
    },
  );

  if (!project) {
    return notFound();
  }

  return (
    <MotionTitle className="max-w-xl px-4">
      <div className="mb-4 flex items-center gap-2 md:flex-row">
        <NextLinkColor />

        <h1 className="text-base font-bold md:text-xl">{project.name}</h1>
        <TechBadge name={project.badge} color="badgeYear" />
      </div>

      <div className="text-justify indent-5">
        <PortableText value={project.content} />
      </div>

      <div className="my-3 flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <p>Website:</p>

          <LinkSanity href={project.linkWebsite} target="__blank">
            {project.linkWebsite}
          </LinkSanity>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row">
          <p>Github:</p>
          <LinkSanity href={project.linkGithub} target="__blank">
            {project.linkGithub}
          </LinkSanity>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
          <p>Tech:</p>

          <div className="mt-2 flex flex-wrap justify-center gap-x-[6px] gap-y-4 md:mt-0 md:justify-start lg:max-w-[350px]">
            {project.tech?.map((badge, i) => (
              <TechBadge name={badge} key={`${i}-${badge}`} size="sm" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        {project.image.map((image, index) => (
          <Image
            key={index}
            src={urlFor(image).width(720).height(400).quality(90).url()}
            alt={project.name}
            width={720}
            height={400}
            quality={90}
            className="rounded-md"
          />
        ))}
      </div>
    </MotionTitle>
  );
}
