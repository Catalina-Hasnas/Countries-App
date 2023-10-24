import { useThemeProvider } from "@/app/providers/ThemeProvider";
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
      <Image width={30} height={30} alt="sun" src="/sun-solid.svg" />
      Light Mode
    </button>
  );
};
