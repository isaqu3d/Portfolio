"use client";

import useThemeData from "@hook/useThemeData";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";

import { ReactNode } from "react";
import { ButtonTheme } from "./ButtonTheme";
import Logo from "./Logo";
import { MenuItem } from "./MenuItem";

interface LinkItemProps {
  href: string;
  target?: string;
  children: ReactNode;
}

const LinkItem = ({ href, target, children }: LinkItemProps) => {
  const router = usePathname();
  const active = router === href;

  return (
    <NextLink
      href={href}
      target={target}
      passHref
      scroll={false}
      className={`${
        active ? "rounded-md bg-teal-400 p-2 text-black" : "hover:underline"
      }`}
    >
      {children}
    </NextLink>
  );
};

export default function Navbar() {
  const { theme } = useThemeData();
  return (
    <>
      <header
        className={`${
          theme
            ? "bg-white-100/30"
            : "border-b-[1px] border-gray-600 bg-gray-900/20"
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

            <div>
              <MenuItem />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
