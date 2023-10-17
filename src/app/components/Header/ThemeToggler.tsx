"use client";

import { useThemeProvider } from "@/app/providers/ThemeProvider";
import { useState } from "react";

export const ThemeToggler = () => {
  const { isDarkTheme, toggleIsDarkTheme } = useThemeProvider();
  return (
    <button onClick={() => toggleIsDarkTheme()}>
      {isDarkTheme ? "Light theme" : "Dark theme"}
    </button>
  );
};
