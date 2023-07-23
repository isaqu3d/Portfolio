import Bio from "@components/Bio";
import { ButtonLink } from "@components/ButtonLink";
import { CardTypeWriter } from "@components/CardTypeWriter";
import { Heading } from "@components/Heading";
import { Motion } from "@components/Motion";
import { Paragraph } from "@components/Paragraph";
import { SocialMedia } from "@components/SocialMedia";
import useThemeData from "@hook/useThemeData";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export default function Home() {
  const { theme } = useThemeData();
  return (
    <>
      <Motion>
        <CardTypeWriter />

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
          <div className="flex-grow">
            <h1 className="font-sansMPlus text-4xl font-bold sm:text-center lg:text-start">
              Isaque de Sousa
            </h1>

            <p>Entusiasta Digital ( Code / Desenvolvedor / Remoto )</p>
          </div>

          <div>
            <div className="inline-block h-[100px] w-[100px] overflow-hidden rounded-full border-2 border-white-200">
              <Image
                src="/profile.jpeg"
                alt="Imagem de perfil"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>

        <Heading>Sobre mim</Heading>

        <Paragraph>
          Fala DEVs, Sou um desenvolvedor Web e Mobile Junior. Sou um grande
          entusiasta da tecnologia e um apaixonado por programação. Atualmente
          estudo focado as seguintes Techs:
          <span className={`${theme ? "text-teal-500" : "text-pink-500"}`}>
            {""} "ReactJS", "NextJS", "TypeScript", "TailwindCSS", "CSS-In-JS"
          </span>
          . Eu pretendo me tornar um dev Full-Stack, e para isto, trabalho e
          estudo muito para conseguir realizar essa meta. E então DEVs... Bora
          codar!
        </Paragraph>

        <div className="flex justify-center">
          <ButtonLink href="/projects">
            Projetos <BiChevronRight />
          </ButtonLink>
        </div>

        <div>
          <Bio />
        </div>

        <div>
          <Heading>Eu ♥</Heading>

          <Paragraph>Musica, Jogar, Codar, Ler, Aprender.</Paragraph>
        </div>

        <div>
          <SocialMedia />
        </div>
      </Motion>
    </>
  );
}
