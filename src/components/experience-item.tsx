"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "../lib/urlSanity";

import { Translations } from "@/@types/types";
import { getTranslations } from "@/lib/get-translations";

import formatDate from "@/utils/format-date";
import { Button } from "./button";
import { ExperienceSkeleton } from "./experience-skeleton";
import { MotionSection } from "./motion";
import { ProgressBarExperience } from "./progressbar-experience";
import { Technology } from "./technology";

export function ExperienceItem({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const [translations, setTranslations] = useState<Translations>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTranslations(locale);
      if (res) setTranslations(res);
    };

    fetchData();
  }, [locale]);

  if (!translations) {
    return <ExperienceSkeleton />;
  }

  const { experiences } = translations;

  if (!experiences || !Array.isArray(experiences)) {
    return <p>Experiências não encontradas.</p>;
  }

  return (
    <>
      {experiences.map((experience) => {
        const description = experience?.description;
        const finalDescription = Array.isArray(description)
          ? description
          : description
            ? [description]
            : [];

        return (
          <MotionSection key={experience._key}>
            <section className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-[2px]">
                  <Image
                    src={
                      experience?.companyLogo
                        ? urlFor(experience.companyLogo).url()
                        : ""
                    }
                    alt={experience?.companyName ?? ""}
                    width={50}
                    height={50}
                    quality={90}
                    className="rounded-full"
                  />
                </div>

                <ProgressBarExperience />
              </div>

              <div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="link"
                    href={experience?.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:text-md w-max text-base"
                  >
                    <span>@</span> {experience?.companyName}
                  </Button>
                  <h2 className="font-medium text-gray-100 dark:text-gray-700">
                    {experience?.role}
                  </h2>
                  <span className="text-gray-300 dark:text-gray-400">
                    {formatDate(experience.startDate, locale)} -{" "}
                    {experience.endDate
                      ? formatDate(experience.endDate, locale)
                      : locale === "pt"
                        ? "No momento"
                        : "Present"}
                  </span>

                  {finalDescription.length > 0 && (
                    <article className="prose text-gray-500">
                      <PortableText value={finalDescription} />
                    </article>
                  )}
                </div>

                <div>
                  <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
                    Tecnologias
                  </p>

                  <div className="mb-8 flex flex-wrap gap-x-2 gap-y-4 lg:max-w-[350px]">
                    {experience?.technologies.map((tech) => (
                      <Technology key={tech._key}>
                        {tech.image && (
                          <Image
                            src={urlFor(tech.image)?.url()}
                            alt={tech.name ?? ""}
                            width={16}
                            height={16}
                            quality={90}
                          />
                        )}
                        <p className="text-sm">{tech.name}</p>
                      </Technology>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </MotionSection>
        );
      })}
    </>
  );
}
