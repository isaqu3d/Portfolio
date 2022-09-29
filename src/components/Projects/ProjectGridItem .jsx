import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export default function ProjectGridItem({ children, id, title, thumbnail }) {
  return (
    <>
      <Box w="100%" textAlign="center">
        <NextLink href={`/projects/${id}`} passHref scroll={false}>
          <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} />

            <LinkOverlay href={`/projects/${id}`}>
              <Text
                mt={2}
                fontSize={20}
                color={useColorModeValue("teal.600", "pink.300")}
              >
                {title}
              </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
          </LinkBox>
        </NextLink>
      </Box>
    </>
  );
}
