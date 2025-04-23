"use client";

import { Translations } from "@/@types/types";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { getTranslations } from "@/lib/get-translations";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { ExperienceItem } from "./experience-item";
import { Heading } from "./heading";
import { MotionSlide } from "./motion";

export function Experience() {
  const locale = useLocale();
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [local, setLocal] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const translationsData = await getTranslations(locale);
      const localData = getLocalTranslations(locale);
      setTranslations(translationsData);
      setLocal(localData);
    };

    loadData();
  }, [locale]);

  if (!translations || !local) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="flex flex-col gap-10 py-0 md:gap-4 lg:flex-row lg:gap-16 lg:py-16">
        <MotionSlide>
          <div className="w-full lg:w-[250px]">
            <Heading>{local.experiences.title}</Heading>
            <p className="text-gray-500">{local.experiences.description}</p>
          </div>
        </MotionSlide>

        <div className="flex flex-col gap-4">
          <ExperienceItem key={translations?.experiences?._key} />
        </div>
      </section>
    </>
  );
}
