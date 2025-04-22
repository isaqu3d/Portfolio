"use client";

import { LINKS_ITEMS } from "@/constants/links-menu";
import { getLocalTranslations } from "@/lib/get-local-translations";
import { Menu } from "@headlessui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";

export function MenuMobile() {
  const router = usePathname();

  const locale = useLocale();
  const translations = getLocalTranslations(locale);
  const navbar = translations.navbar;

  return (
    <main className="flex md:hidden">
      <Menu as="nav" aria-label="open list menu">
        <Menu.Button
          aria-label="icon button"
          className="rounded-md border-[1.5px] border-gray-600 p-2 text-xl"
        >
          <BiMenu />
        </Menu.Button>

        <Menu.Items
          as="nav"
          className="dark:border-background/15 absolute -bottom-[200px] right-3 flex w-52 animate-ToggleMenu flex-col gap-[6px] rounded-md border border-gray-300 bg-gray-900 px-4 py-2 font-sans dark:bg-white-100"
        >
          {LINKS_ITEMS.map((link) => (
            <Menu.Item key={link.id}>
              <NextLink href={link.href}>
                <p
                  className={
                    router === link.href ? "text-teal-400" : "hover:underline"
                  }
                >
                  {navbar?.[link.key] ?? link.key}
                </p>
              </NextLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </main>
  );
}
