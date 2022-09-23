import { Box, Center, Text } from "@chakra-ui/react";

export default function CardInfo() {
  return (
    <Center
      background="gray.200"
      color="white.100"
      w={503}
      h="48px"
      borderRadius={7}
      margin={4}
      boxShadow="0 25px 50px -12px #000"
    >
      {" "}
      <Box>
        {" "}
        <Text>Olá, Eu sou um desenvolvedor Web e Mobile</Text>{" "}
      </Box>{" "}
    </Center>
  );
}
