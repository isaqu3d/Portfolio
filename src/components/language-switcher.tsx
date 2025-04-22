"use client";

import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { BiChevronDown } from "react-icons/bi";

const LOCALES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    startTransition(() => {
      router.push(newPath);
    });
  };

  const currentLocale = LOCALES.find((l) => l.code === locale);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-gray-600 dark:hover:bg-gray-200">
        <span>{currentLocale?.flag}</span>
        <span className="hidden md:inline">{currentLocale?.label}</span>
        <BiChevronDown className="hidden text-lg md:block" />
      </Menu.Button>

      <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md border border-gray-200 bg-gray-900 shadow-lg ring-1 ring-black/10 focus:outline-none dark:bg-gray-300">
        {LOCALES.map(({ code, label, flag }) => (
          <Menu.Item key={code}>
            {({ active }) => (
              <button
                disabled={isPending || code === locale}
                onClick={() => handleChange(code)}
                className={clsx(
                  "text-white flex w-full items-center gap-2 px-4 py-2 text-sm",
                  active ? "bg-teal-400 dark:bg-teal-500" : "",
                  code === locale ? "font-semibold text-teal-500" : "",
                )}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
