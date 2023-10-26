"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";
import { DropdownBarExpandIcon } from "./DropdownExpandIcon";
import { DropdownBarCollapseIcon } from "./DropdownCollapseIcon";

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
            <a href="#">Africa</a>
          </li>
          <li>
            <a href="#">America</a>
          </li>
          <li>
            <a href="#">Asia</a>
          </li>
          <li>
            <a href="#">Europe</a>
          </li>
          <li>
            <a href="#">Oceania</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
