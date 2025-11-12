"use client";
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";

export function ButtonTheme() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          aria-label="button changed dark mode and light mode"
          className="flex  items-center justify-center rounded-lg bg-purple-700 p-3 text-white-100 transition hover:bg-purple-800 dark:animate-ButtonThemeFall2"
        >
          <RiMoonFill />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          aria-label="button changed dark mode and light mode"
          className=" flex animate-ButtonThemeFall cursor-pointer items-center justify-center rounded-lg bg-yellow-300 p-3 text-black transition hover:bg-yellow-500 dark:text-white-100 "
        >
          <FiSun />
        </button>
      )}
    </>
  );
}
