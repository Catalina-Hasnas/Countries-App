import { ReactNode, Suspense } from "react";
import { Dropdown } from "./Components/Dropdown/Dropdown";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import styles from "./filterResults.module.css";

const formCallBack = (
  <form action="#" role="search">
    <input
      type="text"
      placeholder="Search for a country..."
      name="search bar"
    />
  </form>
);

export const FilteredResults = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.filterResultsSection}>
        <Suspense fallback={formCallBack}>
          <SearchBar />
        </Suspense>
        <Dropdown />
      </section>
      {children}
    </>
  );
};
