"use client";

import { Menu } from "@headlessui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { BiMenu } from "react-icons/bi";

interface LinkItemProps {
  href: string;
  target?: string;
  children: ReactNode;
}

const LinkItem = ({ href, children }: LinkItemProps) => {
  const router = usePathname();
  const active = router === href;

  return (
    <NextLink
      href={href}
      passHref
      scroll={false}
      className={active ? "text-teal-500 " : "hover:underline"}
    >
      {children}
    </NextLink>
  );
};
export function MenuItem() {
  return (
    <div className="flex md:hidden">
      <Menu as="nav" aria-label="open list menu">
        <Menu.Button
          aria-label="icon button"
          className="rounded-md border-[1.5px] border-gray-600 p-2 text-xl"
        >
          <BiMenu />
        </Menu.Button>
        <Menu.Items className="absolute right-3 -bottom-32 flex w-52 animate-ToggleMenu flex-col gap-[6px] rounded-md  bg-[#31384c] py-2 px-4 text-white-100">
          <Menu.Item>
            <LinkItem href="/">Sobre mim</LinkItem>
          </Menu.Item>

          <Menu.Item>
            <LinkItem href="/projects">Projetos</LinkItem>
          </Menu.Item>

          <Menu.Item>
            <LinkItem href="/skills">Habilidades</LinkItem>
          </Menu.Item>
          <Menu.Item>
            <LinkItem
              href="https://github.com/X-SpeedBlack-X/portfolio-chakra"
              target="_blank"
            >
              Código
            </LinkItem>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
