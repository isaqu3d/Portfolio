import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { IoLogoGithub } from "react-icons/io5";
import Logo from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, children, ...props }) => {
  const router = useRouter();
  const active = router.asPath === href;
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "teal.400" : undefined}
        color={active ? "#202023" : inactiveColor}
        borderRadius={5}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default function Navbar() {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          flexGrow={1}
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <LinkItem href="/projects">Projetos</LinkItem>

          <LinkItem href="/skills">Habilidades</LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/X-SpeedBlack-X/portfolio-chakra"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Código
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Sobre mim</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projetos</MenuItem>
                </NextLink>
                <NextLink href="/skills" passHref>
                  <MenuItem as={Link}>Habilidades</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  Código fonte
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}