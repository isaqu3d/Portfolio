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
        Move.It - Pomodoro
        <Badge
          ml={2}
          color={useColorModeValue("whiteAlpha.800", "whiteAlpha.700")}
          bg={useColorModeValue("teal.600", "gray.300")}
        >
          2021
        </Badge>
      </Title>

      <Paragraph>
        Seja bem-vindo ao projeto Move.it. Esse projeto é um aplicação de um
        pomodoro para melhorar seus estudos, pois, quando o tempo chega ao fim e
        lança um desafio para você fazer. E depois de completar o desafio você
        ganha XP para upar de level, e podendo iniciar o Pomodoro novamente.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <BadgeMeta>Website</BadgeMeta>
          <Link
            href="https://nlw-moveit-six.vercel.app/"
            target="_blank"
            color={useColorModeValue("teal.500", "pink.300")}
          >
            https://nlw-moveit-six.vercel.app/
          </Link>
        </ListItem>

        <ListItem>
          <BadgeMeta>Tech</BadgeMeta>
          <span>NextJS, TypeScript.</span>
        </ListItem>
      </List>
      <ProjectImage src="/project/pomodoro_2.png" />
      <ProjectImage src="/project/pomodoro_3.png" />
      <ProjectImage src="/project/pomodoro_4.png" />
    </Container>
  );
}
