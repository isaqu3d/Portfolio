import { Box } from "@chakra-ui/react";

export default function CardText() {
  return (
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      css={{ backdropFilter: "blur(10px)" }}
      background="gray.200"
      color="white.100"
    >
      Olá, Eu sou um desenvolvedor Web e Mobile
    </Box>
  );
}
