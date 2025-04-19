"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "../lib/urlSanity";

import { Translations } from "@/@types/types";
import { getTranslations } from "@/lib/get-translations";

import formatDate from "@/utils/format-date";
import { Button } from "./button";
import { MotionSection } from "./motion";
import { ProgressBarExperience } from "./progressbar-experience";
import { Skeleton } from "./skeleton";
import { Technology } from "./technology";

export function ExperienceItem({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const [translations, setTranslations] = useState<Translations>();

  useEffect(() => {
    getTranslations(locale).then((res) => {
      if (res) {
        setTranslations(res);
      }
    });
  }, [locale]);

  if (!translations) {
    return (
      <div>
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-10 rounded-full border border-gray-500 p-[2px]">
              <Skeleton className="h-full w-full rounded-full bg-zinc-700 dark:bg-slate-300" />
            </div>

            <div className="h-full w-[2px] grow bg-gray-500 dark:bg-slate-300" />
          </div>

          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-40 rounded bg-rose-100/10 dark:bg-slate-300" />
            <Skeleton className="h-4 w-32 rounded bg-rose-100/10 dark:bg-slate-300" />
            <Skeleton className="h-3 w-48 rounded bg-rose-100/10 dark:bg-slate-300" />

            <div className="mt-4 space-y-2">
              <Skeleton className="h-3 w-4/5 rounded bg-zinc-700 dark:bg-slate-300" />
              <Skeleton className="h-3 w-3/5 rounded bg-zinc-700 dark:bg-slate-300" />
              <Skeleton className="h-3 w-2/5 rounded bg-zinc-700 dark:bg-slate-300" />
            </div>

            <div className="mt-6">
              <Skeleton className="mb-2 h-3 w-24 rounded bg-zinc-600 dark:bg-slate-300" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <Skeleton
                    key={i}
                    className="h-6 w-20 rounded bg-zinc-700 dark:bg-slate-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
