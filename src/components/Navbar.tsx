"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";

import useThemeData from "@/hook/useThemeData";
import { ReactNode } from "react";
import { ButtonTheme } from "./ButtonTheme";

import Logo from "./Logo";
import { MenuItem } from "./MenuItem";
import { MotionHeader } from "./Motion";

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
      scroll
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
      <MotionHeader
        className={`${
          theme
            ? "border-zinc-400 bg-white-100/30"
            : "border-gray-600 bg-gray-900/30"
        }  fixed z-50 flex w-full justify-center border-b-[1px] backdrop-blur-sm`}
      >
        <nav className="flex max-w-screen-md flex-1 justify-between p-2">
          <div className="mr-5 flex items-center">
            <Logo />
          </div>

          <div className="hidden flex-grow items-center gap-4 md:flex">
            <LinkItem href="/projects">Projetos</LinkItem>
            <LinkItem href="/work-experience">Experiência</LinkItem>
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
