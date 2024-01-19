import { groq } from "next-sanity";
import client from "../lib/sanityClient";
import { WorkExperienceProps } from "../types/workExperience";
import { ExperienceItem } from "./ExperienceItem";
import { Heading } from "./Heading";
import { MotionTitle } from "./Motion";

type WorkExperience = {
  experience: WorkExperienceProps;
};

export async function Experience() {
  const experiences = await client.fetch(
    groq`*[_type == "experiences"] | order(startDate desc)`,
  );

  return (
    <>
      <section className="flex flex-col gap-10 py-0 md:gap-4 lg:flex-row lg:gap-16 lg:py-16">
        <MotionTitle>
          <div className="w-full lg:w-[250px]">
            <Heading>Experiência</Heading>
            <p className="text-gray-500">
              Todas minhas experiências profissional detalhadas para você!
            </p>
          </div>
        </MotionTitle>

        <div className="flex flex-col gap-4">
          {experiences?.map((experience: WorkExperience) => (
            // @ts-expect-error Server Component
            <ExperienceItem key={experience._id} experience={experience} />
          ))}
        </div>
      </section>
    </>
  );
}
