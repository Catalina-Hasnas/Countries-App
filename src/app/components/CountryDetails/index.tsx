import {
  CountryDetailsResponse,
  CountryDetailsWithBorders,
  mapCountryDetailsResponse,
} from "./utils";
import Image from "next/image";
import styles from "./countryDetails.module.css";
import Link from "next/link";

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
    <article className={styles.countryDetailsContainer}>
      <Image
        src={flagSrc}
        alt={commonName}
        width={700}
        height={500}
        style={{ width: "100%", height: "auto" }}
      />
      <section className={styles.countryDetailsInfo}>
        <h2> {commonName} </h2>
        <ul className={styles.countryDetailsInfoList}>
          <li>
            <h3> Native Name: </h3> {nativeNames}
          </li>
          <li>
            <h3> Official Name: </h3> {officialName}
          </li>
          <li>
            <h3> Population: </h3> {population}
          </li>
          <li>
            <p>
              <h3> Region: </h3> {region}
            </p>
          </li>
          <li>
            <h3> Subregion: </h3> {subregion}
          </li>
          <li>
            <h3> Capital: </h3> {capitals}
          </li>
          <li>
            <h3> Top Level Domain: </h3> {tld}
          </li>
          <li>
            <h3> Currencies: </h3> {currencies}
          </li>
          <li>
            <h3> Languages: </h3> {languages}
          </li>
        </ul>
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
      </section>
    </article>
  );
};
