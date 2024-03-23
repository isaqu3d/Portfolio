import formatDate from "@/utils/format-date";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../lib/urlSanity";
import { WorkExperienceProps } from "../types/workExperience";
import { Button } from "./Button";
import { MotionSection } from "./Motion";
import { ProgressBarExperience } from "./ProgressBarExperience";
import { Technology } from "./Technology";

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
              src={urlFor(experience.companyLogo)?.url()}
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
            <Button
              variant="pink"
              href={experience.companyUrl}
              target="_blank"
              className="lg:text-md w-max text-base"
            >
              <span>@</span> {experience.companyName}
            </Button>
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
                <Technology key={technology._id}>
                  {technology.image ? (
                    <Image
                      src={urlFor(technology.image)?.url()}
                      alt={technology.name ?? ""}
                      width={16}
                      height={16}
                      quality={90}
                    />
                  ) : null}
                  <p className="text-sm">{technology.name}</p>
                </Technology>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
