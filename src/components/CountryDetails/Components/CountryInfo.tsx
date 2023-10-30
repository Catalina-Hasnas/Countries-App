import { CountryDetailsMapped } from "../types";
import styles from "../countryDetails.module.css";

export const CountryInfo = ({
  commonName,
  officialName,
  nativeNames,
  capitals,
  currencies,
  languages,
  population,
  region,
  subregion,
  tld,
}: CountryDetailsMapped) => {
  return (
    <div className={styles.countryDetailsInfo}>
      <h2> {commonName} </h2>
      <ul className={styles.countryDetailsInfoList}>
        <li>
          <span> Native Name: </span> {nativeNames}
        </li>
        <li>
          <span> Official Name: </span> {officialName}
        </li>
        <li>
          <span> Population: </span> {population}
        </li>
        <li>
          <p>
            <span> Region: </span> {region}
          </p>
        </li>
        <li>
          <span> Subregion: </span> {subregion}
        </li>
        <li>
          <span> Capital: </span> {capitals}
        </li>
        <li>
          <span> Top Level Domain: </span> {tld}
        </li>
        <li>
          <span> Currencies: </span> {currencies}
        </li>
        <li>
          <span> Languages: </span> {languages}
        </li>
      </ul>
    </div>
  );
};
