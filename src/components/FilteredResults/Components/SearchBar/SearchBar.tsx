"use client";

import { useCallback } from "react";
import { SearchBarIcon } from "./Components/SearchBarIcon";
import styles from "./searchBar.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      if (!value) {
        params.delete("search");
      } else {
        params.set("search", value);
      }
      return params.toString();
    },
    [searchParams]
  );

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
        onChange={(e) => {
          router.replace(pathname + "?" + createQueryString(e.target.value));
        }}
      />
    </form>
  );
};
