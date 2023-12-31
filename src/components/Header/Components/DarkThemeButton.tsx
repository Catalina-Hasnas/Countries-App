"use client";

import { useThemeProvider } from "@/providers/ThemeProvider";
import Image from "next/image";

export const DarkThemeButton = () => {
  const { toggleIsDarkTheme } = useThemeProvider();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleIsDarkTheme(false);
      }}
    >
      <Image width={18} height={18} alt="sun" src="/sunny-outline.svg" />
      Light Mode
    </button>
  );
};
