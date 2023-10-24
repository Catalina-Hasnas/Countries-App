import { useThemeProvider } from "@/app/providers/ThemeProvider";
import Image from "next/image";
import styles from "./header.module.css";

export const LightThemeButton = () => {
  const { toggleIsDarkTheme } = useThemeProvider();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleIsDarkTheme(true);
      }}
    >
      <Image
        className={styles.moon}
        width={30}
        height={30}
        alt="image dark"
        src="/moon-regular.svg"
      />
      Dark Mode
    </button>
  );
};
