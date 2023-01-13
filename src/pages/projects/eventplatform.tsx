import { ListItemProject } from "../../components/Projects/ListItemProject";

import { Motion } from "../../components/Motion";
import HeaderItemProject from "../../components/Projects/HeaderItemProject";
import ImageProject from "../../components/Projects/ImageProject";

export default function eventplatform() {
  return (
    <div className="max-w-md px-4">
      <Motion>
        <HeaderItemProject
          title="Plataforma de Evento"
          badgeYear={2022}
          description=" Seja bem-vindo ao projeto criado na NLW com intuito de fazer uma
          plataforma de aulas. Nesta plataforma vocês pode cadastrar
          aulas/vídeos. Como por exemplo: Aulas de programação, intensivão de
          aulas, Receitas de comidas, etc."
        />

        <ListItemProject
          url="https://event-platform-livid.vercel.app/"
          urlGitHub="https://github.com/X-SpeedBlack-X/event-platform"
          description="ReactJS, Graphql, TailwindCSS, Router, Apollo, date-fns."
          target="_blank"
        />

        <ImageProject
          src="/project/eventplatform_2.png"
          alt="Primeira imagem ddo projeto"
        />
        <ImageProject
          src="/project/eventplatform_3.png"
          alt="Segunda imagem ddo projeto"
        />
      </Motion>
    </div>
  );
}
