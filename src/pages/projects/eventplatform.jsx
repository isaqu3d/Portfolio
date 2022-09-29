import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

import { Paragraph } from "../../components/Paragraph";
import { default as BadgeMeta } from "../../components/Projects/BagdeColor";
import ProjectImage from "../../components/Projects/ProjectImage";
import Title from "../../components/Projects/Title";

export default function eventplatform() {
  return (
    <Container>
      <Title>
        Plataforma de Evento
        <Badge
          ml={2}
          color={useColorModeValue("whiteAlpha.800", "whiteAlpha.700")}
          bg={useColorModeValue("teal.600", "gray.300")}
        >
          2022
        </Badge>
      </Title>

      <Paragraph>
        Seja bem-vindo ao projeto criado na NLW com intuito de fazer uma
        plataforma de aulas. Nesta plataforma vocês pode cadastrar aulas/vídeos.
        Como por exemplo: Aulas de programação, intensivão de aulas, Receitas de
        comidas, etc.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <BadgeMeta>Website</BadgeMeta>
          <Link
            href="https://event-platform-livid.vercel.app/"
            target="_blank"
            color={useColorModeValue("teal.500", "pink.300")}
          >
            https://event-platform-livid.vercel.app/
          </Link>
        </ListItem>

        <ListItem>
          <BadgeMeta>Tech</BadgeMeta>
          <span>ReactJS, Graphql, TailwindCSS, Router, Apollo, date-fns.</span>
        </ListItem>
      </List>
      <ProjectImage src="/project/eventplatform_2.png" />
      <ProjectImage src="/project/eventplatform_3.png" />
    </Container>
  );
}
