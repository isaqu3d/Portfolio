"use client";

import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const useThemeData = () => {
  const { theme, changeTheme } = useContext(ThemeContext) || { theme: "" };

  return { changeTheme, theme };
};

export default useThemeData;
