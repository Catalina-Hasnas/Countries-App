"use client";

import { useRouter } from "next/navigation";
import styles from "../countryDetails.module.css";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className={`${styles.backButton} appShadow`}
      onClick={(e) => {
        e.preventDefault;
        router.back();
      }}
    >
      <span>Back</span>
    </button>
  );
};
