import { Heading } from "@/components/Heading";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { Button } from "./Button";

export function SocialMedia() {
  return (
    <>
      <Heading>Conecte-se comigo</Heading>

      <div>
        <Button
          variant="social"
          size="textMd"
          href="https://www.instagram.com/_isaque.s_/"
          target="_blank"
          className="font-bold"
        >
          <IoLogoInstagram />
          Instagram
        </Button>

        <Button
          variant="social"
          size="textMd"
          href="https://www.linkedin.com/in/isaque-de-sousa/"
          target="_blank"
          className="font-bold"
        >
          <IoLogoLinkedin />
          Linkedin
        </Button>

        <Button
          variant="social"
          size="textMd"
          href="https://github.com/X-SpeedBlack-X"
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
