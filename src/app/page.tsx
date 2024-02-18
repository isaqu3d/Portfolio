"use client";

import Bio from "@/components/Bio";
import { CardTypeWriter } from "@/components/CardTypeWriter";
import { Heading } from "@/components/Heading";
import { MotionSection, MotionSlide } from "@/components/Motion";
import { SocialMedia } from "@/components/SocialMedia";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

import { Button } from "@/components/Button";

import { FormSendEmail } from "@/components/EmailSend/FormSendEmail";
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
  return (
    <div className="max-w-2xl px-4">
      <MotionSlide>
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
      </MotionSlide>

      <main>
        <MotionSlide>
          <Heading>Sobre mim</Heading>

          <p className="inset-5 text-justify">
            Fala DEVs, Sou um desenvolvedor Web e Mobile Junior. Sou um grande
            entusiasta da tecnologia e um apaixonado por programação. Atualmente
            estudo focado as seguintes Techs:
            <span className=" text-pink-500 dark:text-teal-600">
              {""} "ReactJS", "NextJS", "TypeScript", "TailwindCSS", "CSS-In-JS"
            </span>
            . Eu pretendo me tornar um dev Full-Stack, e para isto, trabalho e
            estudo muito para conseguir realizar essa meta. E então DEVs... Bora
            codar!
          </p>

          <div className="my-2 flex items-center justify-center">
            <Button href="/projects" variant="teal" size="textMd">
              Projetos <BiChevronRight />
            </Button>
          </div>
        </MotionSlide>

        <MotionSection>
          <Bio />
          <Heading>Eu ♥</Heading>

          <p className="inset-5 text-justify">
            Musica, Jogar, Codar, Ler, Aprender.
          </p>

          <div className="my-2 flex items-center justify-center">
            <Button href="work-experience" size="textMd" variant="teal">
              Experiências <MdOutlineWorkOutline />
            </Button>
          </div>

          <SocialMedia />

          <FormSendEmail />
        </MotionSection>
      </main>
    </div>
  );
}
