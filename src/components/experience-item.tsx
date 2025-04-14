import { getTranslations } from "@/lib/get-translations";
import formatDate from "@/utils/format-date";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../lib/urlSanity";
import { Button } from "./button";
import { MotionSection } from "./motion";
import { ProgressBarExperience } from "./progressbar-experience";
import { Technology } from "./technology";

export async function ExperienceItem({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const translations = await getTranslations(locale);

  if (!translations) {
    return <p>Erro ao carregar traduções para o idioma: {locale}</p>;
  }

  const { experiences } = translations;

  const description = experiences?.description;

  const finalDescription = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <MotionSection>
      <section className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full border border-gray-500 p-[2px]">
            <Image
              src={urlFor(experiences?.companyLogo ?? "")?.url()}
              alt={translations.experiences?.companyName ?? ""}
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
              variant="link"
              href={translations.experiences?.companyUrl}
              target="_blank"
              className="lg:text-md w-max text-base"
            >
              <span>@</span> {translations.experiences?.companyName}
            </Button>
            <h2 className="font-medium text-gray-100 dark:text-gray-700">
              {translations.experiences?.role}
            </h2>
            <span className="text-gray-300 dark:text-gray-400">
              {formatDate(experiences?.startDate ?? "")} -{" "}
              {experiences?.endDate
                ? formatDate(experiences?.endDate)
                : "No momento"}
            </span>

            {finalDescription.length > 0 && (
              <article className="prose text-gray-500">
                <PortableText value={finalDescription} />
              </article>
            )}
          </div>

          <div>
            <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
              Tecnologias
            </p>

            <div className="mb-8 flex flex-wrap gap-x-2 gap-y-4 lg:max-w-[350px]">
              {experiences?.technologies.map((technology) => (
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
