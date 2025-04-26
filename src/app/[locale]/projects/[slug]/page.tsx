"use client";

import { MotionSlide } from "@/components/motion";
import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";

import { Translations } from "@/@types/types";
import { Button } from "@/components/button";
import { Technology } from "@/components/technology";
import { Badge } from "@/components/ui/badge";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { getTranslations } from "@/lib/get-translations";
import { urlFor } from "@/lib/urlSanity";
import { PortableText } from "@portabletext/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ProjectLoading from "../components/loading";

export default function Slug({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { locale, slug } = params;

  const { projects: projectLocal } = getLocalTranslations(locale);

  const {
    data: translations,
    isLoading,
    error,
  } = useQuery<Translations | null>({
    queryKey: ["translations", locale],
    queryFn: async () => {
      const res = await getTranslations(locale);
      return res;
    },
  });

  if (isLoading) {
    return <ProjectLoading />;
  }

  if (error || !translations) {
    return <p>{projectLocal.notFound.projects}</p>;
  }

  const { projects } = translations;

  if (!projects || projects.length === 0) {
    return <p>{projectLocal.notFound.projects}</p>;
  }

  const project = projects.find((p) => p.slug.current === slug);

  if (!project) {
    return <p>{projectLocal.notFound.projects}</p>;
  }

  return (
    <MotionSlide className="max-w-xl px-4">
      <div className="mb-4 flex items-center gap-2 md:flex-row">
        <NextLink
          href="/projects"
          className="flex items-center text-sm text-pink-400 hover:underline dark:text-teal-600 dark:hover:underline md:text-base"
        >
          {projectLocal.title}
          <span className="text-white-100 dark:text-black">
            <BiChevronRight />
          </span>
        </NextLink>

        <h1 className="text-base font-bold md:text-xl">{project.name}</h1>
        <Badge variant="darkMode">{project.badge}</Badge>
      </div>

      <div className="text-justify indent-5">
        <PortableText value={project.content} />
      </div>

      <div className="my-3 flex flex-col gap-2">
        <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
          <p>Website:</p>
          <Button
            variant="link"
            size="md"
            href={project.website}
            target="__blank"
          >
            {project.website}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
          <p>Github:</p>
          <Button
            variant="link"
            size="md"
            href={project.github}
            target="__blank"
          >
            {project.github}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-0 md:flex-row md:items-start md:gap-2">
          <p>Tech:</p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-[6px] gap-y-4 md:mt-0 md:justify-start lg:max-w-[550px]">
            {project.technologies?.length > 0 ? (
              project.technologies.map((technology) => (
                <Technology key={technology._key}>
                  {technology.image && (
                    <Image
                      src={urlFor(technology.image)?.url()}
                      alt={technology.name ?? ""}
                      width={14}
                      height={14}
                      quality={90}
                    />
                  )}
                  <p className="text-sm">{technology.name}</p>
                </Technology>
              ))
            ) : (
              <p>{projectLocal.notFound.technologies}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {project.image?.length > 0 ? (
          project.image.map((image, index) => (
            <Image
              key={index}
              src={urlFor(image).width(720).height(400).quality(90).url()}
              alt={project.name}
              width={720}
              height={400}
              quality={90}
              className="rounded-md"
            />
          ))
        ) : (
          <p>{projectLocal.notFound.images}</p>
        )}
      </div>
    </MotionSlide>
  );
}
