"use client";

import { useThemeProvider } from "@/providers/ThemeProvider";
import { ReactNode } from "react";

export const Body = ({ children }: { children: ReactNode }) => {
  const { isDarkTheme } = useThemeProvider();

  const darkThemeMapper: Record<string, string> = {
    true: "dark",
    false: "light",
  };

  return (
    <body
      data-theme={
        isDarkTheme === undefined
          ? undefined
          : darkThemeMapper[isDarkTheme.toString()]
      }
    >
      {children}
    </body>
  );
};
