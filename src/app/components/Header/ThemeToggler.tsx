import { DarkThemeButton } from "./DarkThemeButton";
import { LightThemeButton } from "./LightThemeButton";

export const ThemeToggler = () => {
  return (
    <>
      <div className="dark">
        <DarkThemeButton />
      </div>
      <div className="light">
        <LightThemeButton />
      </div>
    </>
  );
};
