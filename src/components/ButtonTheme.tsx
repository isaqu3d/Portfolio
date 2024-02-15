"use client";
import useThemeData from "@/hook/useThemeData";
import { MouseEventHandler } from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";

export function ButtonTheme() {
  const { theme, changeTheme } = useThemeData();
  const isDark = theme === "dark";

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    const newTheme = isDark ? "" : "dark";
    changeTheme(newTheme);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="button changed dark mode and light mode"
      className={`${
        isDark
          ? "animate-ButtonThemeFall bg-purple-700 text-white-100 hover:bg-purple-800"
          : "animate-ButtonThemeFall2 bg-yellow-300 text-black hover:bg-yellow-500"
      } flex cursor-pointer items-center justify-center rounded-lg p-3`}
    >
      {isDark ? <RiMoonFill /> : <FiSun />}
    </button>
  );
}
