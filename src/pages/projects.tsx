import { NextSeo } from "next-seo";

import thumbEventPlatform from "../../public/project/eventplatform.png";
import thumbPomodoro from "../../public/project/move.it.png";
import thumbMyTrips from "../../public/project/my-trips.png";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectGridItem
            url="eventplatform"
            title="Plataforma de Evento"
            thumbnail={thumbEventPlatform}
            alt="imagem do projeto da plataforma de evento"
          >
            Plataforma de videos de todos os tipos e gostos! 💻
          </ProjectGridItem>

          <ProjectGridItem
            title="Pomodoro"
            thumbnail={thumbPomodoro}
            url="move.it"
            alt="imagem do projeto move.it"
          >
            Projeto para fazer você não ficar parado! 🏃‍♂️
          </ProjectGridItem>

          <ProjectGridItem
            title="Minhas viagens"
            thumbnail={thumbMyTrips}
            url="my-trips"
            alt="imagem do projeto minhas viagem"
          >
            Mapa de todos lugares que já foi ou que eu gostaria de ir. 🗺️
          </ProjectGridItem>
        </div>
      </Motion>
    </>
  );
}
