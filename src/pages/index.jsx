import Image from "next/image";
import NextLink from "next/link";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading } from "@chakra-ui/react";

import Bio from "../components/Bio";
import CardText from "../components/CardText";
import { Paragraph } from "../components/Paragraph";
import Section from "../components/Section";
import SocialMedia from "../components/SocialMedia";

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
                alt="Imagem de perfil"
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
            estudo focado as seguintes Tech: ReactJS, NextJS, TypeScript,
            TailwindCSS, CSS-In-JS. eu trabalho e estudo muito para conseguir
            realizar essa meta. E então DEVs... Bora codar!
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Box align="center">
            <NextLink href="/projects">
              <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                Projetos
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Bio />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Eu ♥
          </Heading>
          <Paragraph>Musica, Jogar, Codar, Ler, Aprender</Paragraph>
        </Section>

        <Section delay={0.3}>
          <SocialMedia />
        </Section>
      </Container>
    </>
  );
}
