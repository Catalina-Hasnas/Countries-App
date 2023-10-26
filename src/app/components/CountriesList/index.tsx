import { CountryMapped } from "@/app/utils";
import { Country } from "./Country";
import styles from "./countries.module.css";

export const CountriesList = ({
  countries,
}: {
  countries: CountryMapped[];
}) => {
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
