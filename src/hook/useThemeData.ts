"use client";

import ThemeContext from "@context/ThemeContext";
import { useContext } from "react";

const useThemeData = () => {
  const { theme, changeTheme } = useContext(ThemeContext) || { theme: "" };

  return { theme, changeTheme };
};

export default useThemeData;
