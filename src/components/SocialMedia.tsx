import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

import { Heading } from "./Heading";
import { LinkItem } from "./LinkItem";

export function SocialMedia() {
  return (
    <>
      <Heading>Conecte-se comigo</Heading>

      <div>
        <LinkItem href="https://www.instagram.com/_isaque.s_/" target="_blank">
          <IoLogoInstagram />
          @_isaque.s_
        </LinkItem>

        <LinkItem
          href="https://www.linkedin.com/in/isaque-de-sousa/"
          target="_blank"
        >
          <IoLogoLinkedin />
          @linkedin
        </LinkItem>

        <LinkItem href="https://github.com/X-SpeedBlack-X" target="_blank">
          <IoLogoGithub />
          @GitHub
        </LinkItem>
      </div>
    </>
  );
}
