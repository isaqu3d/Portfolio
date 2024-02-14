"use client";

import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const useThemeData = () => {
  const context = useContext(ThemeContext);
  const theme = context?.theme || "";
  const changeTheme = context?.changeTheme || null;
  const setThemeContext = context?.setThemeContext || null;

  return { theme, changeTheme, setThemeContext };
};

export default useThemeData;
