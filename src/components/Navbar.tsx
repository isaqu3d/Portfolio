"use client";

import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";

import Logo from "./Logo";
import { MenuItem } from "./MenuItem";
import { MotionHeader } from "./Motion";
import { ButtonTheme } from "./button-theme";

interface LinkItemProps extends LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, target, children }: LinkItemProps) => {
  const router = usePathname();
  const active = router === href;

  return (
    <NextLink
      href={href}
      target={target}
      className={`${
        active ? "rounded-md bg-teal-400 text-black" : "hover:underline"
      }  p-2`}
    >
      {children}
    </NextLink>
  );
};

export default function Navbar() {
  return (
    <>
      <MotionHeader className="fixed z-50 flex w-full justify-center border-b-[1px] border-gray-600 bg-gray-900/30 backdrop-blur-sm dark:border-zinc-400 dark:bg-white-100/30">
        <nav className="flex max-w-screen-md flex-1 items-center justify-between p-2">
          <div className="mr-5">
            <Logo />
          </div>

          <div className="hidden flex-grow items-center gap-4 md:flex">
            <LinkItem href="/projects">Projetos</LinkItem>
            <LinkItem href="/work-experiences">Experiências</LinkItem>
            <LinkItem href="/skills">Habilidades</LinkItem>

            <LinkItem
              target="_blank"
              href="https://github.com/X-SpeedBlack-X/Portfolio"
            >
              <div className="flex items-center justify-center gap-1">
                <IoLogoGithub />
                Código
              </div>
            </LinkItem>
          </div>

          <div className="flex flex-col justify-end gap-2 xs:flex-row">
            <ButtonTheme />

            <MenuItem />
          </div>
        </nav>
      </MotionHeader>
    </>
  );
}
