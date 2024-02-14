"use client";
import { createContext, useEffect, useState } from "react";

type ThemeContextProps = {
  theme: string;
  changeTheme: (theme: string) => void;
  setThemeContext?: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<string>("");

  function changeTheme() {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const setThemeContext = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, setThemeContext }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
