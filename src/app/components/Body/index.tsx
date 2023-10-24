"use client";

import { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";
import { useThemeProvider } from "@/app/providers/ThemeProvider";

const font = Nunito_Sans({ subsets: ["latin"], weight: ["300", "600", "800"] });

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
      className={font.className}
    >
      {children}
    </body>
  );
};
