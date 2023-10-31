import Link from "next/link";
import { ThemeToggler } from "./Components/ThemeToggler";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={`${styles.header} appShadow`}>
      <h1>
        <Link href={"/"}>Where in the world?</Link>
      </h1>
      <ThemeToggler />
    </header>
  );
};
