import { Button, Heading, Link, List, ListItem } from "@chakra-ui/react";

import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

export default function SocialMedia() {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Conecte-se Comigo
      </Heading>
      <List>
        <ListItem>
          <Link href="https://www.instagram.com/_isaque.s_/" target="_blank">
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
    </>
  );
}
