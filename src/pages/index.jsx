import Image from "next/image";
import NextLink from "next/link";

import Bio from "../components/Bio";
import CardText from "../components/CardText";
import { Heading } from "../components/Heading";
import { Motion } from "../components/Motion";
import { Paragraph } from "../components/Paragraph";
import { SocialMedia } from "../components/SocialMedia";

export default function Home() {
  return (
    <Motion>
      <div className="max-w-lg px-4">
        <CardText />

        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex-grow">
            <Heading className="text-4xl font-sans no-underline mb-0">
              Isaque de Sousa
            </Heading>

            <p>Entusiasta Digital ( Code / Desenvolvedor / Remoto )</p>
          </div>

          <div flexShrink={0}>
            <div className="border-white-200 border-2 rounded-full w-[100px] h-[100px] inline-block overflow-hidden">
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

        <Paragraph className="">
          Fala DEVs, Sou um desenvolvedor Web e Mobile Junior. Sou um grande
          entusiasta da tecnologia e um apaixonado por programação. Atualmente
          estudo focado as seguintes Techs: ReactJS, NextJS, "TypeScript",
          TailwindCSS, CSS-In-JS. Eu pretendo me tornar um dev Full-Stack, e
          para isto, trabalho e estudo muito para conseguir realizar essa meta.
          E então DEVs... Bora codar!
        </Paragraph>

        <div className="flex justify-center">
          <NextLink href="/projects">
            <button className="flex items-center gap-3 bg-teal-200 hover:bg-teal-400 transition-colors text-black font-medium p-2 px-4 rounded-md">
              Projetos seta
            </button>
          </NextLink>
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
      </div>
    </Motion>
  );
}
