import { Container } from "@chakra-ui/react";
import { ListItemProject } from "../../components/Projects/ListItemProject";

import HeaderItemProject from "../../components/Projects/HeaderItemProject";
import ProjectImage from "../../components/Projects/ProjectImage";
import Section from "../../components/Section";

export default function eventplatform() {
  return (
    <Container>
      <Section>
        <HeaderItemProject
          title="Move.It - Pomodoro"
          badgeYear={2021}
          description=" Seja bem-vindo ao projeto Move.it. Esse projeto é um aplicação de um
          pomodoro para melhorar seus estudos, pois, quando o tempo chega ao fim
          e lança um desafio para você fazer. E depois de completar o desafio
          você ganha XP para upar de level, e podendo iniciar o Pomodoro
          novamente."
        />

        <ListItemProject
          url="https://nlw-moveit-six.vercel.app/"
          href="https://nlw-moveit-six.vercel.app/"
          hrefGitHub="https://github.com/X-SpeedBlack-X/nlw-move.it"
          urlGitHub="https://github.com/X-SpeedBlack-X/nlw-move.it"
          description="NextJS, TypeScript"
          target="_blank"
        />
        <ProjectImage src="/project/pomodoro_2.png" />
        <ProjectImage src="/project/pomodoro_3.png" />
        <ProjectImage src="/project/pomodoro_4.png" />
      </Section>
    </Container>
  );
}
