import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Title({ children }) {
  return (
    <>
      <Box>
        <NextLink href="/projects" passHref>
          <Link color={useColorModeValue("teal.500", "pink.300")}>Projeto</Link>
        </NextLink>
        <span>
          <ChevronRightIcon />
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          {children}
        </Heading>
      </Box>
    </>
  );
}
