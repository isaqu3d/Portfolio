import { Box, useColorModeValue } from "@chakra-ui/react";
import { Typewriter } from "./TypeWriter";

export default function CardText() {
  return (
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      css={{ backdropFilter: "blur(10px)" }}
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      color={useColorModeValue("black.500", "white.200")}
    >
      <Typewriter />
    </Box>
  );
}
