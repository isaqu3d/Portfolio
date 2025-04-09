import { Heading } from "@/components/heading";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { Button } from "./button";

export function SocialMedia() {
  return (
    <>
      <Heading>Conecte-se comigo</Heading>

      <div>
        <Button
          variant="social"
          size="md"
          href="https://www.instagram.com/_isaque.s_/"
          target="_blank"
          className="font-bold"
        >
          <IoLogoInstagram />
          Instagram
        </Button>

        <Button
          variant="social"
          size="md"
          href="https://www.linkedin.com/in/isaque-de-sousa/"
          target="_blank"
          className="font-bold"
        >
          <IoLogoLinkedin />
          Linkedin
        </Button>

        <Button
          variant="social"
          size="md"
          href="https://github.com/isaqu3d"
          target="_blank"
          className="font-bold"
        >
          <IoLogoGithub />
          GitHub
        </Button>
      </div>
    </>
  );
}
