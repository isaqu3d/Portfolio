"use client";

import { Translations } from "@/types";
import { ExperienceLoading } from "@/app/[locale]/work-experiences/components/loading";
import { getLocalTranslations } from "@/services/local-translations.service";
import { getTranslations } from "@/services/translations.service";
import { useLocale } from "next-intl";

import { useQuery } from "@tanstack/react-query";
import { ExperienceItem } from "./experience-item";

export function Experience() {
  const locale = useLocale();

  const {
    data: translations,
    isLoading,
    error,
  } = useQuery<Translations | null>({
    queryKey: ["translations", locale],
    queryFn: () => {
      return getTranslations(locale);
    },
  });

  if (isLoading) return <ExperienceLoading />;
  if (error || !translations) return <p>Erro ao carregar experiências.</p>;

  const local = getLocalTranslations(locale);

  return (
    <section className="flex flex-col gap-10 py-0 md:gap-4 lg:flex-row lg:gap-16 lg:py-16">
      <div className="w-full lg:w-[350px]">
        <h1 className="text-2xl font-bold">{local.experiences.title}</h1>
        <p className="text-gray-500">{local.experiences.description}</p>
      </div>

      <div className="flex w-full flex-col gap-8">
        {translations.experiences?.map((experience) => (
          <ExperienceItem key={experience._key} experience={experience} />
        ))}
      </div>
    </section>
  );
}
