import NextLink from "next/link";
import { useRouter } from "next/router";
import { IoLogoGithub } from "react-icons/io5";

import useThemeData from "../hook/useThemeData";
import { ButtonTheme } from "./ButtonTheme";
import Logo from "./Logo";
import { MenuItem } from "./MenuItem";

const LinkItem = ({ href, children, ...props }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <NextLink href={href} passHref scroll={false}>
      <a
        href={href}
        className={`${
          active ? "rounded-md bg-teal-400 p-2 text-black" : "hover:underline"
        } 
        `}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default function Navbar() {
  const { theme } = useThemeData();
  return (
    <>
      <header
        className={`${
          theme ? "bg-white-100/10" : "bg-gray-900/10"
        }  fixed z-50 flex w-full justify-center backdrop-blur-sm`}
      >
        <nav className="flex max-w-screen-md flex-1 justify-between p-2">
          <div className="mr-5 flex items-center">
            <h1>
              <Logo />
            </h1>
          </div>

          <div
            className={`${
              theme ? " text-gray-600 " : "text-white-100"
            } hidden flex-grow items-center gap-4 md:flex `}
          >
            <LinkItem href="/projects">Projetos</LinkItem>
            <LinkItem href="/skills">Habilidades</LinkItem>
            <LinkItem
              target="_blank"
              href="https://github.com/X-SpeedBlack-X/portfolio-chakra"
            >
              <div className="flex items-center justify-center gap-1">
                <IoLogoGithub />
                Código
              </div>
            </LinkItem>
          </div>

          <div className="flex flex-col justify-end gap-2 xs:flex-row">
            <ButtonTheme />

            <div>
              <MenuItem />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
