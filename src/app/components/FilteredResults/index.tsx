import { ReactNode, Suspense } from "react";
import { Dropdown } from "../Dropdown";
import { SearchBar } from "../SearchBar";
import styles from "./filterResults.module.css";

export const FilteredResults = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.filterResultsSection}>
        <Suspense
          fallback={
            <form action="#" role="search">
              <input
                type="text"
                placeholder="Search for a country..."
                name="search bar"
              />
            </form>
          }
        >
          <SearchBar />
        </Suspense>
        <Dropdown />
      </section>
      {children}
    </>
  );
};
