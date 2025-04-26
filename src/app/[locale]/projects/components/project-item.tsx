"use client";

import { Projects } from "@/@types/types";
import { urlFor } from "@/lib/urlSanity";
import Image from "next/image";
import NextLink from "next/link";

type ProjectItemProps = {
  project: Projects;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="w-full text-center" key={project._key}>
      <NextLink href={`/projects/${project.slug.current}`}>
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
  );
}
