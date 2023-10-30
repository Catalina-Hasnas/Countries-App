import { CountryDetailsWithBorders, mapCountryDetailsResponse } from "./utils";
import Image from "next/image";
import styles from "./countryDetails.module.css";
import Link from "next/link";
import { BackButton } from "./BackButton";

export const CountryDetails = ({
  country,
}: {
  country: CountryDetailsWithBorders;
}) => {
  const mappedCountry = mapCountryDetailsResponse(country);

  const {
    commonName,
    officialName,
    nativeNames,
    capitals,
    currencies,
    flagSrc,
    languages,
    population,
    region,
    subregion,
    tld,
    borderCountries,
  } = mappedCountry;

  return (
    <>
      <BackButton />
      <article className={styles.countryDetailsContainer}>
        <div className={styles.countryDetailsImageContainer}>
          <Image
            src={flagSrc}
            alt={commonName}
            fill
            className={styles.countryDetailsImage}
          />
        </div>
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
        <div className={styles.borderCountries}>
          <h3>Border Countries:</h3>
          <nav>
            <ul>
              {borderCountries.map((borderCountry, index) => {
                return (
                  <li className="appShadow" key={index}>
                    <Link href={`/country/${borderCountry}`}>
                      {borderCountry}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
};
