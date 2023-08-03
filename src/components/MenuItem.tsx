"use client";

import { Menu } from "@headlessui/react";
import useThemeData from "@hook/useThemeData";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

const LINKS_ITEMS = [
  {
    id: uuidv4(),
    name: "Sobre mim",
    href: "/",
  },
  { id: uuidv4(), name: "Projetos", href: "/projects" },
  { id: uuidv4(), name: "Habilidades", href: "/skills" },
  {
    id: uuidv4(),
    name: "Código",
    href: "https://github.com/X-SpeedBlack-X/Portfolio",
  },
];

export function MenuItem() {
  const { theme } = useThemeData();
  const router = usePathname();

  return (
    <div className="flex md:hidden">
      <Menu as="nav" aria-label="open list menu">
        <Menu.Button
          aria-label="icon button"
          className="rounded-md border-[1.5px] border-gray-600 p-2 text-xl"
        >
          <BiMenu />
        </Menu.Button>

        <Menu.Items
          as="nav"
          className={`${
            theme ? "bg-white-100" : "bg-[#31384c]"
          } absolute right-3 -bottom-32 flex w-52 animate-ToggleMenu flex-col gap-[6px] rounded-md py-2 px-4 font-sansMPlus`}
        >
          {LINKS_ITEMS.map((link) => (
            <Menu.Item key={link.id}>
              <NextLink href={link.href}>
                <p
                  className={
                    router === link.href ? "text-teal-400" : "hover:underline"
                  }
                >
                  {link.name}
                </p>
              </NextLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
