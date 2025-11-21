import { Button } from "@/components/ui/button";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export function SocialMedia() {
  return (
    <div>
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
  );
}
