import { Dropdown } from "../Dropdown";
import { SearchBar } from "../SearchBar";
import styles from "./filterResults.module.css";

export const FilterResults = () => {
  return (
    <div className={styles.filterResultsSection}>
      <SearchBar />
      <Dropdown />
    </div>
  );
};
