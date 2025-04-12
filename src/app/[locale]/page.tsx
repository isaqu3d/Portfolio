import { PortableText } from "@portabletext/react";
import { GlobeIcon } from "@radix-ui/react-icons/dist";
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

import { Button } from "@/components/button";
import { GitHubAvatar } from "@/components/github-avatar";
import { Heading } from "@/components/heading";
import { MotionSection, MotionSlide } from "@/components/motion";
import { SocialMedia } from "@/components/social-media";
import { Typewriter } from "@/components/typewriter";
import { getTranslations } from "@/lib/get-translations";

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const translations = await getTranslations(locale);

  if (!translations) {
    return <div>Erro ao carregar traduções para o idioma: {locale}</div>;
  }

  return (
    <div className="max-w-2xl px-4">
      <MotionSlide>
        <Typewriter />

        <header className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
          <div className="flex-grow">
            <h1 className="font-sansMPlus text-4xl font-bold sm:text-center lg:text-start">
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
          <Heading>Sobre mim</Heading>

          <article className="inset-5 text-justify">
            {translations.home_summary ? (
              <PortableText value={translations.home_summary} />
            ) : (
              <p>Resumo não encontrado.</p>
            )}
          </article>

          <div className="my-2 flex items-center justify-center">
            <Button href="/projects" variant="teal" size="md">
              Projetos <BiChevronRight />
            </Button>
          </div>
        </MotionSlide>

        <MotionSection>
          <div>
            {translations.home_biography?.length ? (
              translations.home_biography.map((item) => (
                <div key={item._key} className="pl-14 -indent-14">
                  <span className="mr-4 font-bold">{item.year}</span>{" "}
                  {item.description}
                </div>
              ))
            ) : (
              <div>Nenhuma biografia encontrada.</div>
            )}
          </div>

          <Heading>Eu ♥</Heading>
          <p className="inset-5 text-justify">
            Musica, Jogar, Codar, Ler, Aprender.
          </p>
          <div className="my-2 flex items-center justify-center">
            <Button href="work-experiences" size="md" variant="teal">
              Experiências <MdOutlineWorkOutline />
            </Button>
          </div>
          <SocialMedia />
        </MotionSection>
      </main>
    </div>
  );
}
