import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import thumbEventPlatform from "../../public/project/eventplatform.png";
import thumbPomodoro from "../../public/project/move.it.png";
import ProjectGridItem from "../components/Projects/ProjectGridItem ";

import Section from "../components/Section";

export default function projects() {
  return (
    <>
      <Container>
        <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
          Projetos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="eventplatform"
              title="Plataforma de Evento"
              thumbnail={thumbEventPlatform}
            >
              Plataforma de videos de todos os tipos e gostos! 💻
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              title="Pomodoro"
              thumbnail={thumbPomodoro}
              id="move.it"
            >
              Projeto para fazer você não ficar parado! 🏃‍♂️
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </>
  );
}
