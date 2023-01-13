import { FiSun } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
import useThemeData from "../hook/useThemeData";

export function ButtonTheme() {
  const { theme, changeTheme } = useThemeData();
  const isDark = theme === "dark";
  return (
    <button
      onClick={changeTheme}
      aria-label="button changed dark mode and light mode"
      className={`${
        isDark
          ? "bg-purple-700 hover:bg-purple-800 text-white-100 animate-ButtonThemeFall"
          : "bg-yellow-300 hover:bg-yellow-500 text-black animate-ButtonThemeFall2"
      } flex justify-center items-center rounded-lg cursor-pointer p-3`}
    >
      {isDark ? <RiMoonFill /> : <FiSun />}
    </button>
  );
}
