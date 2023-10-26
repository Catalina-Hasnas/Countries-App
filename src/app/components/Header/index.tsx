import { ThemeToggler } from "./ThemeToggler";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={`${styles.header} appShadow`}>
      <h1>Where in the world?</h1>
      <ThemeToggler />
    </header>
  );
};
