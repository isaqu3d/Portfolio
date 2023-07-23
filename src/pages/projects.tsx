import thumbEventPlatform from "@public/project/eventplatform.png";
import thumbPomodoro from "@public/project/move.it.png";
import thumbMyTrips from "@public/project/my-trips.png";
import { NextSeo } from "next-seo";

import { Heading } from "../components/Heading";
import { Motion } from "../components/Motion";
import ProjectGridItem from "../components/Projects/ProjectGridItem ";

export default function projects() {
  return (
    <>
      <NextSeo
        title="Projetos - Isaque de Sousa"
        description="Todos os meus projetos feito por mim"
      />
      <Motion>
        <Heading>Projetos</Heading>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ProjectGridItem
            url="eventplatform"
            title="Plataforma de Evento"
            thumbnail={thumbEventPlatform}
            alt="imagem do projeto da plataforma de evento"
            description="Plataforma de videos de todos os tipos e gostos! 💻"
          />

          <ProjectGridItem
            title="Pomodoro"
            thumbnail={thumbPomodoro}
            url="move.it"
            alt="imagem do projeto move.it"
            description="Projeto para fazer você não ficar parado! 🏃‍♂️"
          />

          <ProjectGridItem
            title="Minhas viagens"
            description="Mapa de todos lugares que já foi ou que eu gostaria de ir. 🗺️"
            thumbnail={thumbMyTrips}
            url="my-trips"
            alt="imagem do projeto minhas viagem"
          />
        </div>
      </Motion>
    </>
  );
}
