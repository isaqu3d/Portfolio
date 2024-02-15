"use client";

import Bio from "@/components/Bio";
import { ButtonLink } from "@/components/ButtonLink";
import { CardTypeWriter } from "@/components/CardTypeWriter";
import { Heading } from "@/components/Heading";
import { MotionSection, MotionTitle } from "@/components/Motion";
import { SocialMedia } from "@/components/SocialMedia";
import useThemeData from "@/hook/useThemeData";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

import { GlobeIcon } from "@radix-ui/react-icons/dist";

export type HomeProps = {
  _id: string;
  about: string;
  bio: string;
};

type Home = {
  home: HomeProps;
};

export default function Home() {
  const { theme } = useThemeData();

  return (
    <div className="max-w-2xl px-4">
      <MotionTitle>
        <CardTypeWriter />
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

          <div className="relative">
            <div className="inline-block h-[100px] w-[100px] overflow-hidden rounded-full ">
              <Image
                src="/profile.jpeg"
                alt="Imagem de perfil"
                width={100}
                height={100}
              />
            </div>

            <div className="absolute top-[85px] right-3 h-4 w-4 rounded-full bg-green-600">
              <div className=" h-4 w-4 animate-ping rounded-full bg-green-700" />
            </div>
          </div>
        </header>
      </MotionTitle>

      <main>
        <MotionTitle>
          <Heading>Sobre mim</Heading>

          <p className="inset-5 text-justify">
            Fala DEVs, Sou um desenvolvedor Web e Mobile Junior. Sou um grande
            entusiasta da tecnologia e um apaixonado por programação. Atualmente
            estudo focado as seguintes Techs:
            <span className={`${theme ? "text-teal-600" : "text-pink-500"}`}>
              {""} "ReactJS", "NextJS", "TypeScript", "TailwindCSS", "CSS-In-JS"
            </span>
            . Eu pretendo me tornar um dev Full-Stack, e para isto, trabalho e
            estudo muito para conseguir realizar essa meta. E então DEVs... Bora
            codar!
          </p>

          <ButtonLink href="/projects">
            Projetos <BiChevronRight />
          </ButtonLink>
        </MotionTitle>

        <MotionSection>
          <Bio />
          <Heading>Eu ♥</Heading>

          <p className="inset-5 text-justify">
            Musica, Jogar, Codar, Ler, Aprender.
          </p>

          <ButtonLink href="work-experience">
            Experiências <MdOutlineWorkOutline />
          </ButtonLink>

          <SocialMedia />

          {/* <FormSubmit /> */}
        </MotionSection>
      </main>
    </div>
  );
}
