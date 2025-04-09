import { MotionSlide } from "@/components/Motion";
import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";

import { Button } from "@/components/button";
import { Technology } from "@/components/technology";
import { Badge } from "@/components/ui/badge";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import client from "../../../lib/sanityClient";
import { urlFor } from "../../../lib/urlSanity";

export default async function Slug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [project] = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug]`,
    {
      slug,
    },
  );

  return (
    <MotionSlide className="max-w-xl px-4">
      <div className="mb-4 flex items-center gap-2 md:flex-row">
        <NextLink
          href="/projects"
          className="flex items-center text-sm text-pink-400 hover:underline dark:text-teal-600 dark:hover:underline md:text-base"
        >
          Projeto
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
            href={project.linkWebsite}
            target="__blank"
          >
            {project.linkWebsite}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
          <p>Github:</p>
          <Button
            variant="link"
            size="md"
            href={project.linkGithub}
            target="__blank"
          >
            {project.linkGithub}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-0 md:flex-row md:items-start md:gap-2">
          <p>Tech:</p>

          <div className="mt-2 flex flex-wrap justify-center gap-x-[6px] gap-y-4 md:mt-0 md:justify-start lg:max-w-[550px]">
            {project.technologies?.map((technology) => (
              <Technology key={technology._id}>
                {technology.image ? (
                  <Image
                    src={urlFor(technology.image)?.url()}
                    alt={technology.name ?? ""}
                    width={14}
                    height={14}
                    quality={90}
                  />
                ) : null}
                <p className="text-sm">{technology.name}</p>
              </Technology>
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
    </MotionSlide>
  );
}
