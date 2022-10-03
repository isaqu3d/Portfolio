import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">Não encontrado</Heading>
      <Text>A pagina que você está procurando não foi encontrada</Text>
      <Center>
        <Image
          src="/404error.png"
          width={150}
          height={150}
          alt="Imagem do error 404"
        />
      </Center>

      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Retorne para o inicio</Button>
        </NextLink>
      </Box>
    </Container>
  );
}
