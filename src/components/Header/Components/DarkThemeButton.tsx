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
      <Image width={15} height={15} alt="sun" src="/sun-solid.svg" />
      Light Mode
    </button>
  );
};
