"use client";

import ThemeContext from "@context/ThemeContext";
import { useContext } from "react";

const useThemeData = () => {
  const { theme, changeTheme } = useContext(ThemeContext) || { theme: "" };
  const isDark = theme === "dark";

  return { changeTheme, isDark };
};

export default useThemeData;
