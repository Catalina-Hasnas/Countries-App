import { Country } from "./Components/Country";
import styles from "./countries.module.css";
import { CountryResponse } from "./types";
import { mapCountriesResponse, sortAlphabeticallyByName } from "./utils";

export const CountryList = ({
  countries: countriesRaw,
}: {
  countries: CountryResponse[];
}) => {
  const countries = mapCountriesResponse(countriesRaw).sort((a, b) =>
    sortAlphabeticallyByName(a, b)
  );

  return (
    <div className={styles.countryList}>
      {countries.map((country, index) => (
        <Country
          key={index}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flagSrc={country.flagSrc}
        />
      ))}
    </div>
  );
};
