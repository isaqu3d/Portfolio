"use client";

import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { Translations } from "@/@types/types";
import { Heading } from "@/components/heading";
import { MotionSlide } from "@/components/motion";
import { getTranslations } from "@/lib/get-translations";
import { urlFor } from "@/lib/urlSanity";
import ProjectLoading from "./[slug]/loading";

export default function Projects({ params }: { params: { locale: string } }) {
  const [translations, setTranslations] = useState<Translations>();

  const { locale } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTranslations(locale);
        if (res) {
          setTranslations(res);
          console.log("res", res);
        }

        console.log("res", res);
      } catch (error) {
        console.error("Erro ao buscar traduções:", error);
      }
    };

    fetchData();
  }, [locale]);

  if (!translations) {
    return <ProjectLoading />;
  }

  const { projects } = translations;

  if (!projects || projects.length === 0) {
    return <p>Projetos não encontrados.</p>;
  }

  return (
    <div className="max-w-xl px-4">
      <MotionSlide>
        <Heading>Projetos</Heading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div className="w-full text-center" key={project._key}>
              <NextLink href={`projects/${project.slug.current}`}>
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
