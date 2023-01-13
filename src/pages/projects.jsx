import { NextSeo } from "next-seo";
import thumbEventPlatform from "../../public/project/eventplatform.png";
import thumbPomodoro from "../../public/project/move.it.png";
import { Heading } from "../components/Heading";
import { Motion } from "../components/Motion";
import ProjectGridItem from "../components/Projects/ProjectGridItem ";

export default function projects() {
  return (
    <div className="max-w-lg px-4 font-serif">
      <NextSeo
        title="Projetos - Isaque de Sousa"
        description="Todos os meus projetos feito por mim"
      />
      <Motion>
        <Heading>Projetos</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectGridItem
            id="eventplatform"
            title="Plataforma de Evento"
            thumbnail={thumbEventPlatform}
          >
            Plataforma de videos de todos os tipos e gostos! 💻
          </ProjectGridItem>

          <ProjectGridItem
            title="Pomodoro"
            thumbnail={thumbPomodoro}
            id="move.it"
          >
            Projeto para fazer você não ficar parado! 🏃‍♂️
          </ProjectGridItem>
        </div>
      </Motion>
    </div>
  );
}
