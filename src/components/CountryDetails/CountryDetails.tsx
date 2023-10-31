import { mapCountryDetailsResponse } from "./utils";
import Image from "next/image";
import styles from "./countryDetails.module.css";
import Link from "next/link";
import { BackButton } from "./Components/BackButton";
import { CountryDetailsWithBorders } from "./types";
import { CountryInfo } from "./Components/CountryInfo";
import { BorderCountries } from "./Components/BorderCountries";

export const CountryDetails = ({
  country,
}: {
  country: CountryDetailsWithBorders;
}) => {
  const mappedCountry = mapCountryDetailsResponse(country);

  const { commonName, flagSrc, borderCountries } = mappedCountry;

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
        <CountryInfo {...mappedCountry} />
        <BorderCountries borderCountries={borderCountries} />
      </article>
    </>
  );
};
