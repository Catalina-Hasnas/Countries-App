"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { useThemeProvider } from "@/app/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkTheme } = useThemeProvider();

  return (
    <body
      data-theme={isDarkTheme ? "dark" : "light"}
      className={inter.className}
    >
      {children}
    </body>
  );
};
