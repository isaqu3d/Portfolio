import { default as NextLink } from "next/link";
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
          active ? "bg-teal-400 text-black rounded-md p-2" : "hover:underline"
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
  const { theme, changeTheme } = useThemeData();
  return (
    <>
      <header
        className={`${
          theme ? "bg-white-100/10" : "bg-gray-900/10"
        }  fixed w-full flex justify-center z-50 backdrop-blur-sm`}
      >
        <nav className="flex flex-1 justify-between p-2 max-w-screen-md">
          <div className="flex items-center mr-5">
            <h1>
              <Logo />
            </h1>
          </div>

          <div
            className={`${
              theme ? " text-gray-600 " : "text-white-100"
            } flex-grow items-center hidden md:flex gap-4 `}
          >
            <LinkItem href="/projects">Projetos</LinkItem>
            <LinkItem href="/skills">Habilidades</LinkItem>
            <LinkItem
              target="_blank"
              href="https://github.com/X-SpeedBlack-X/portfolio-chakra"
            >
              <div className="flex justify-center items-center gap-1">
                <IoLogoGithub />
                Código
              </div>
            </LinkItem>
          </div>

          <div className="flex flex-col xs:flex-row justify-end gap-2">
            <ButtonTheme theme={theme} changeTheme={changeTheme} />

            <div>
              <MenuItem />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
