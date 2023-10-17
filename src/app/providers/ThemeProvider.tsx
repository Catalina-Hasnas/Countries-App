"use client";

import { ReactNode, useState, createContext, useContext } from "react";

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleIsDarkTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleIsDarkTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => {
  const { isDarkTheme, toggleIsDarkTheme } = useContext(ThemeContext);

  return { isDarkTheme, toggleIsDarkTheme };
};
