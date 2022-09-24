import Image from "next/image";
import NextLink from "next/link";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

import { BioSection, BioYear } from "../components/BioSection";
import CardText from "../components/CardText";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Container>
        <CardText />
        <Box
          display="flex"
          alignItems="center"
          flexDirection={["column", "column", "row"]}
        >
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Isaque de Sousa
            </Heading>
            <p>Entusiasta Digital ( Code / Desenvolvedor / Remoto )</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/profile.jpeg"
                alt="Profile image"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section>
          <Heading as="h3" variant="section-title">
            Sobre mim
          </Heading>

          <Paragraph>
            Fala DEVs, Sou um desenvolvedor Web e Mobile Junior. Sou um grande
            entusiasta da tecnologia e um apaixonado por programação. Atualmente
            estudo focado as seguintes tech: ReactJS, NextJS, TailwindCSS e
            CSS-In-JS. Pretendo me tornar um programador Full-Stack e para isso
            eu trabalho e estudo muito para conseguir realizar essa meta. E
            então DEVs... Bora codar!
          </Paragraph>
        </Section>
        <Box align="center">
          <NextLink href="/projects">
            <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
              Projetos
            </Button>
          </NextLink>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Nasci em Fortaleza - CE, Brasil.
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            Comecei a conhecer a área de programação e me apaixonando pela área
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Comecei a estudar focado e agora faço parte do time de
            <span> &quot;Dev Voluntário&quot; </span>
            na Tech Pro Bem
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Eu ♥
          </Heading>
          <Paragraph>Musica, Jogar, Codar, Ler, Aprender</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Conecte-se Comigo
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.instagram.com/_isaque.s_/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @_isaque.s_
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/isaque-de-sousa/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @linkedln
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/X-SpeedBlack-X" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @GitHub
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </>
  );
}
