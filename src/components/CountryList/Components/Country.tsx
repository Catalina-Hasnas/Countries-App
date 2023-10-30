import { CountryMapped } from "@/utils";
import styles from "../countries.module.css";
import Link from "next/link";
import Image from "next/image";

export const Country = ({
  flagSrc,
  name,
  population,
  region,
  capital,
}: CountryMapped) => {
  return (
    <article className={styles.countryCard}>
      <div className={styles.countryCardImageContainer}>
        <Image
          src={flagSrc}
          alt={name}
          fill
          className={styles.countryCardImage}
        />
      </div>
      <div className={styles.countryCardPresentationText}>
        <header>
          <h2>
            <Link href={`/${name}`}>{name}</Link>
          </h2>
        </header>
        <ul>
          <li>
            <span> Population: </span> {population}
          </li>
          <li>
            <span> Region: </span> {region}
          </li>
          <li>
            <span> Capital: </span> {capital}
          </li>
        </ul>
      </div>
    </article>
  );
};
