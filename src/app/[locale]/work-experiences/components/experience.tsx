"use client";

import { Experiences, Translations } from "@/@types/types";
import { ExperienceLoading } from "@/app/[locale]/work-experiences/components/loading";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { getTranslations } from "@/lib/get-translations";
import { useLocale } from "next-intl";

import { useQuery } from "@tanstack/react-query";
import { ExperienceItem } from "./experience-item";

type LocalTranslations = {
  experiences: {
    title: string;
    description: string;
  };
};

type ExperienceItemProps = {
  experience: Experiences;
};

export function Experience() {
  const locale = useLocale();

  const {
    data: translations,
    isLoading,
    error,
  } = useQuery<Translations | null>({
    queryKey: ["translations", locale],
    queryFn: () => {
      const result = getTranslations(locale);
      return result;
    },
  });

  if (isLoading) return <ExperienceLoading />;
  if (error || !translations) return <p>Erro ao carregar experiências.</p>;

  const local = getLocalTranslations(locale);

  return (
    <section>
      <h1>{local.experiences.title}</h1>
      <p>{local.experiences.description}</p>

      {translations.experiences?.map((experience) => (
        <ExperienceItem key={experience._key} experience={experience} />
      ))}
    </section>
  );
}
