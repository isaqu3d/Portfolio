"use client";

import { PortableText } from "@portabletext/react";
import { GlobeIcon } from "@radix-ui/react-icons/dist";
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

import { Translations } from "@/@types/types";
import { Button } from "@/components/button";
import { GitHubAvatar } from "@/components/github-avatar";
import { Heading } from "@/components/heading";
import { MotionSection, MotionSlide } from "@/components/motion";
import { SocialMedia } from "@/components/social-media";
import { Typewriter } from "@/components/typewriter";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { getTranslations } from "@/lib/get-translations";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();

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

  const { home, experiences } = getLocalTranslations(locale);

  if (isLoading) return <p>{t("loading")}</p>;
  if (error || !translations) return <p>{t("error")}</p>;

  return (
    <div className="max-w-2xl px-4">
      <MotionSlide>
        <Typewriter />

        <header className="font flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
          <div className="flex-grow">
            <h1 className="font-sans text-4xl font-bold sm:text-center lg:text-start">
              Isaque de Sousa
            </h1>

            <p className="flex items-center justify-center gap-2 text-zinc-400 lg:justify-start">
              <span>
                <GlobeIcon className="h-4 w-4 text-green-600" />
              </span>
              Fortaleza - Ceará, Brasil.
            </p>
          </div>

          <div className="inline-block h-[100px] w-[100px] overflow-hidden rounded-full ">
            <GitHubAvatar />
          </div>
        </header>
      </MotionSlide>

      <main>
        <MotionSlide>
          <Heading>{home.summary.title}</Heading>

          <article className="inset-5 text-justify">
            {translations.home?.summary.length ? (
              <PortableText value={translations.home?.summary} />
            ) : (
              <p>{home.summary.notFound}</p>
            )}
          </article>

          <div className="my-2 flex items-center justify-center">
            <Button href="/projects" variant="teal" size="md">
              {home.projects.title} <BiChevronRight />
            </Button>
          </div>
        </MotionSlide>

        <MotionSection>
          <Heading>{home.biography.title}</Heading>
          <div>
            {translations.home?.biography?.length ? (
              translations.home.biography.map((item) => (
                <div key={item._key} className="pl-14 -indent-14">
                  <span className="mr-4 font-bold">{item.year}</span>{" "}
                  {item.description}
                </div>
              ))
            ) : (
              <p>{home.biography.notFound}</p>
            )}
          </div>

          <div className="my-2 flex items-center justify-center">
            <Button href="work-experiences" size="md" variant="teal">
              {experiences.title} <MdOutlineWorkOutline />
            </Button>
          </div>

          <Heading>{home.contact.title}</Heading>
          <SocialMedia />
        </MotionSection>
      </main>
    </div>
  );
}
