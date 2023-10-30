"use client";

import { ReactNode, useState, createContext, useContext } from "react";

const ThemeContext = createContext({
  toggleIsDarkTheme: (value: boolean) => {},
  isDarkTheme: undefined as boolean | undefined,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(
    undefined
  );

  const toggleIsDarkTheme = (value: boolean) => {
    setIsDarkTheme(value);
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
