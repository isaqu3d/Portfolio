import { getTranslations } from "@/lib/get-translations";
import { WorkExperienceProps } from "../types/workExperience";
import { ExperienceItem } from "./experience-item";
import { Heading } from "./heading";
import { MotionSlide } from "./motion";

type WorkExperience = {
  experience: WorkExperienceProps;
};

export async function Experience({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const translations = await getTranslations(locale);

  if (!translations || !translations.experiences) {
    return <p>Erro ao carregar traduções para o idioma: {locale}</p>;
  }

  return (
    <>
      <section className="flex flex-col gap-10 py-0 md:gap-4 lg:flex-row lg:gap-16 lg:py-16">
        <MotionSlide>
          <div className="w-full lg:w-[250px]">
            <Heading>Experiências</Heading>
            <p className="text-gray-500">
              Todas minhas experiências profissionais detalhadas para você!
            </p>
          </div>
        </MotionSlide>

        <div className="flex flex-col gap-4">
          {/* @ts-expect-error Server Component */}
          <ExperienceItem key={translations.experiences._id} params={params} />
        </div>
      </section>
    </>
  );
}
