import { default as NextLink } from "next/link";

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import useThemeData from "../hook/useThemeData";
import { Heading } from "./Heading";

const LinkItem = ({ href, children, ...props }) => {
  const { theme } = useThemeData();

  return (
    <NextLink href={href} passHref scroll={false}>
      <a
        href={href}
        className={`${
          theme
            ? "text-teal-700 hover:bg-teal-400/20 w-36 hover:underline hover:underline-offset-[6px] hover:decoration-1 hover:decoration-teal-600"
            : "text-teal-200 hover:bg-teal-400/10 w-36 hover:underline hover:underline-offset-[6px] hover:decoration-1 hover:decoration-pink-500"
        } flex items-center rounded-md p-2 ml-2 gap-2 w-36 font-semibold`}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export function SocialMedia() {
  return (
    <>
      <Heading>Conecte-se comigo</Heading>

      <div className="font-serif">
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
