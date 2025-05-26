"use client";

import { Experiences } from "@/@types/types";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { urlFor } from "@/lib/urlSanity";
import formatDate from "@/utils/format-date";
import { normalizeDescription } from "@/utils/normalize-description";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { Button } from "@/components/button";
import { MotionSection } from "@/components/motion";
import { ProgressBarExperience } from "@/components/progressbar-experience";
import { Technology } from "@/components/technology";
import { useLocale } from "next-intl";

type ExperienceItemProps = {
  experience: Experiences;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const locale = useLocale();
  const local = getLocalTranslations(locale);

  const finalDescription = normalizeDescription(experience.description);

  const positionLevelsMap = {
    junior: local.experiences.positionLevels.junior,
    midLevel: local.experiences.positionLevels.midLevel,
    senior: local.experiences.positionLevels.senior,
    lead: local.experiences.positionLevels.lead,
  };

  return (
    <MotionSection key={experience._key}>
      <section className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full border border-gray-500 p-[2px]">
            <Image
              src={
                experience.companyLogo
                  ? urlFor(experience.companyLogo).url()
                  : "/bag.jpg"
              }
              alt={experience.companyName ?? "Logo"}
              width={50}
              height={50}
              quality={90}
              loading="lazy"
              className="rounded-full"
            />
          </div>

          <ProgressBarExperience />
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <Button
              variant="link"
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:text-md w-max text-base"
            >
              <span>@</span> {experience.companyName}
            </Button>

            <h3 className="font-medium text-gray-100 dark:text-gray-700">
              {experience.role}{" "}
              {experience.positionLevel && (
                <span className="text-sm font-normal text-gray-400">
                  - {positionLevelsMap[experience.positionLevel]}
                </span>
              )}
            </h3>

            <span className="text-gray-300 dark:text-gray-400">
              {formatDate(experience.startDate, locale)} -{" "}
              {experience.endDate
                ? formatDate(experience.endDate, locale)
                : local.experiences.presentLabel}
            </span>

            {finalDescription.length > 0 && (
              <article className="prose text-gray-500">
                <PortableText value={finalDescription} />
              </article>
            )}
          </div>

          <div>
            <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
              {local.experiences.technologiesLabel}
            </p>

            <div className="mb-8 flex flex-wrap gap-x-2 gap-y-4 lg:max-w-[350px]">
              {experience.technologies.map((tech) => (
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
}
