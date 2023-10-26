"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { DropdownBarExpandIcon } from "./DropdownExpandIcon";
import { DropdownBarCollapseIcon } from "./DropdownCollapseIcon";
import Link from "next/link";

export const Dropdown = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className={styles.dropdown}>
      <button
        className="appShadow"
        type="button"
        id="dropdownMenuButton"
        aria-haspopup
        aria-expanded={expanded}
        onClick={() => {
          setExpanded((expandedState) => !expandedState);
        }}
      >
        Filter by region
        {expanded ? <DropdownBarExpandIcon /> : <DropdownBarCollapseIcon />}
      </button>

      {expanded ? (
        <ul className={`${styles.dropdownContent} appShadow`}>
          <li>
            <Link href="/region/africa">Africa</Link>
          </li>
          <li>
            <Link href="/region/america">America</Link>
          </li>
          <li>
            <Link href="/region/asia">Asia</Link>
          </li>
          <li>
            <Link href="/region/europe">Europe</Link>
          </li>
          <li>
            <Link href="/region/oceania">Oceania</Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
