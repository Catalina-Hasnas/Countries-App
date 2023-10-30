import { CountryMapped } from "@/app/utils";
import styles from "./countries.module.css";
import Link from "next/link";

export const Country = ({
  flagSrc,
  name,
  population,
  region,
  capital,
}: CountryMapped) => {
  return (
    <article className={styles.countryCard}>
      <div
        role="img"
        className={styles.countryCardImage}
        style={{ backgroundImage: `url(${flagSrc})` }}
      />
      <div className={styles.countryCardPresentationText}>
        <header>
          <h2>
            <Link href={`/country/${name}`}>{name}</Link>
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
