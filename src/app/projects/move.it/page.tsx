import { Motion } from "@components/Motion";
import HeaderItemProject from "@components/Projects/HeaderItemProject";
import ImageProject from "@components/Projects/ImageProject";
import { ListItemProject } from "@components/Projects/ListItemProject";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Move.it",
  description:
    "Seja bem-vindo ao projeto Move.it. Esse projeto é um aplicação de um pomodoro para melhorar seus estudos e sua saúde. Esse projeto tem como objetivo de organizar seu tempo de estudo com 25 minutos de estudos e no final desse tempo você tem um mini desafio para você fazer.",
};

export default function MoveIt() {
  return (
    <div className="max-w-md px-4">
      <Motion>
        <HeaderItemProject
          title="Move.It - Pomodoro"
          badgeYear={2021}
          description="Seja bem-vindo ao projeto Move.it. Esse projeto é um aplicação de um
          pomodoro para melhorar seus estudos e sua saúde. Esse projeto tem como objetivo de organizar seu tempo de estudo com 25 minutos de estudos e no final desse tempo você tem um mini desafio para você fazer. E depois de completar o desafio
          você ganha XP para upar de level. E assim, podendo iniciar o Pomodoro
          novamente."
        />

        <ListItemProject
          url="https://nlw-moveit-six.vercel.app/"
          urlGitHub="https://github.com/X-SpeedBlack-X/nlw-move.it"
          description="NextJS, TypeScript"
          target="_blank"
        />
        <ImageProject
          src="/project/pomodoro_2.png"
          alt="Primeira imagem do projeto"
        />
        <ImageProject
          src="/project/pomodoro_3.png"
          alt="Segunda imagem do projeto"
        />
        <ImageProject
          src="/project/pomodoro_4.png"
          alt="Terceira imagem do projeto"
        />
      </Motion>
    </div>
  );
}