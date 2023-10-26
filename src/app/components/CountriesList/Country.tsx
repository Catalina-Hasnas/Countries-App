import { CountryMapped } from "@/app/utils";
import styles from "./countries.module.css";

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
        className={styles.countryCardImage}
        style={{ backgroundImage: `url(${flagSrc})` }}
      />
      <div className={styles.countryCardPresentationText}>
        <header>
          <h1> {name} </h1>
        </header>
        <p>
          <span> Population: </span> {population}
        </p>
        <p>
          <span> Region: </span> {region}
        </p>
        <p>
          <span> Capital: </span> {capital}
        </p>
      </div>
    </article>
  );
};
