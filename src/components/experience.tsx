import { getLocalTranslations } from "@/lib/get-local-translations";
import { getTranslations } from "@/lib/get-translations";
import { ExperienceItem } from "./experience-item";
import { Heading } from "./heading";
import { MotionSlide } from "./motion";

export async function Experience({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const translations = await getTranslations(locale);

  const local = getLocalTranslations(locale);

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
