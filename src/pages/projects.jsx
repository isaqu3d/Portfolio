import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import thumbEventPlaform from "../../public/project/eventplatoform.png";
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
              thumbnail={thumbEventPlaform}
            >
              Projeto criado na NLW com intuito de fazer uma plataforma de
              aulas. Como por exemplo: Aulas de programação, Matemática,
              intensivão de aulas, etc.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              title="Pomodoro"
              thumbnail={thumbPomodoro}
              id="move.it"
            >
              Projeto de Pomodoro criado na NLW com intuito de
              melhorar/organizar seus estudos e tempo.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </>
  );
}
