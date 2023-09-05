import { PortableText } from "@portabletext/react";
import formatDate from "@utils/format-date";
import Image from "next/image";
import { WorkExperienceProps } from "../types/workExperience";
import { LinkSanity } from "./LinkSanity";
import { MotionBadge, MotionSection } from "./Motion";
import { ProgressBarExperience } from "./ProgressBarExperience";
import { TechBadge } from "./TechBadge";

type ExperienceItemProps = {
  experience: WorkExperienceProps;
};

export async function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <MotionSection>
      <section className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full border border-gray-500 p-0.5">
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={40}
              height={40}
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

            <MotionBadge className="mb-8 flex flex-wrap gap-x-2 gap-y-3  lg:max-w-[350px]">
              {experience.technologies.map((techName, i) => (
                <TechBadge key={`tech-${techName}-${i}`} name={techName} />
              ))}
            </MotionBadge>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}