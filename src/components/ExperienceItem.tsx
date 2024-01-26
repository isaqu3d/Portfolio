import { PortableText } from "@portabletext/react";
import formatDate from "@utils/format-date";
import Image from "next/image";
import { urlFor } from "../lib/urlSanity";
import { WorkExperienceProps } from "../types/workExperience";
import { LinkSanity } from "./LinkSanity";
import { MotionSection } from "./Motion";
import { ProgressBarExperience } from "./ProgressBarExperience";

type ExperienceItemProps = {
  experience: WorkExperienceProps;
};

export async function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <MotionSection>
      <section className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full border border-gray-500 p-[2px]">
            <Image
              src={urlFor(experience.companyLogo).url()}
              alt={experience.companyName}
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
            <LinkSanity href={experience.companyUrl} target="_blank">
              <span className="text-base lg:text-xl">@</span>{" "}
              {experience.companyName}
            </LinkSanity>
            <h2 className="text-gray-400">{experience.role}</h2>
            <span>
              {formatDate(experience.startDate)} -{" "}
              {experience.endDate
                ? formatDate(experience.endDate)
                : "No momento"}
            </span>

            <article className="prose text-gray-400">
              <PortableText value={experience.description} />
            </article>
          </div>

          <div>
            <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
              Tecnologias
            </p>

            <div className="mb-8 flex flex-wrap gap-x-2 gap-y-4 lg:max-w-[350px]">
              {experience.technologies.map((technology) => (
                <li
                  key={technology._id}
                  className="relative flex items-center gap-2 overflow-hidden rounded-lg border border-border/50 bg-zinc-800 px-3 py-2 text-zinc-200"
                >
                  {technology.image ? (
                    <Image
                      src={urlFor(technology.image)?.url()}
                      alt={technology.name ?? ""}
                      width={16}
                      height={16}
                      quality={90}
                    />
                  ) : null}
                  <p>{technology.name}</p>
                  <div className="via-10% absolute right-0 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white-100/30 to-transparent" />
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
