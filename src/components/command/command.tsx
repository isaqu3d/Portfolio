"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { FiInstagram, FiLinkedin, FiSun } from "react-icons/fi";
import { RiCommandFill, RiMoonFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command-menu";

type Groups = Array<{
  heading: string;
  actions: Array<{
    name: string;
    icon: JSX.Element;
    onSelect: () => void | Promise<void | boolean>;
  }>;
}>;

export function Command() {
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const { setTheme } = useTheme();

  const openLink = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandMenu((prevState) => !prevState);
      }
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setShowCommandMenu]);

  const groups: Groups = [
    {
      heading: "Tema",
      actions: [
        {
          name: "Claro",
          icon: <FiSun />,
          onSelect: () => setTheme("dark"),
        },
        {
          name: "Escuro",
          icon: <RiMoonFill />,
          onSelect: () => setTheme("light"),
        },
      ],
    },
    {
      heading: "Rede Sociais",
      actions: [
        {
          name: "GitHub",
          icon: <SiGithub />,
          onSelect: () => openLink("https://github.com/isaqu3d"),
        },
        {
          name: "LinkedIn",
          icon: <FiLinkedin />,
          onSelect: () => openLink("https://linkedin.com/in/isaque-de-sousa"),
        },
        {
          name: "Instagram",
          icon: <FiInstagram />,
          onSelect: () => openLink("https://instagram.com/_isaque.s_"),
        },
      ],
    },
  ];

  return (
    <div className="fixed bottom-4 left-2 z-[49] lg:left-4">
      <button
        onClick={() => setShowCommandMenu(true)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-black transition hover:bg-background-80 dark:bg-background dark:text-white-100 dark:hover:bg-background-80"
      >
        <RiCommandFill className="h-5 w-5" />
      </button>
      <CommandDialog open={showCommandMenu} onOpenChange={setShowCommandMenu}>
        <CommandInput placeholder={`${"search"} ↵`} />
        <CommandList>
          <CommandEmpty>{"search-empty"}</CommandEmpty>
          {groups.map((group) => (
            <CommandGroup key={group.heading} heading={group.heading}>
              {group.actions.map((action) => (
                <CommandItem key={action.name} onSelect={action.onSelect}>
                  {action.icon}
                  {action.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
