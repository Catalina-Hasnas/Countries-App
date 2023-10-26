"use client";

import { SearchBarIcon } from "./SearchBarIcon";
import styles from "./searchBar.module.css";

export const SearchBar = () => {
  return (
    <form className={styles.searchBar} action="#" role="search">
      <span className={styles.searchIcon}>
        <SearchBarIcon />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        name="search bar"
        className="appShadow"
      ></input>
    </form>
  );
};
