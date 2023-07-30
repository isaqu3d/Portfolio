"use client";

import { createContext, useEffect, useState } from "react";

type ThemeContextProps = {
  theme: string;
  changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<string>("");

  function changeTheme() {
    const newTheme = theme === "" ? "dark" : "";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    setTheme(saveTheme || "");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
