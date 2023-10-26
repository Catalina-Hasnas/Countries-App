import { CountriesList } from "./components/CountriesList";
import { Dropdown } from "./components/Dropdown";
import { SearchBar } from "./components/SearchBar";
import styles from "./page.module.css";
import { mapCountriesResponse, sortAlphabeticallyByName } from "./utils";

async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const countries = await getCountries();

  const mappedCountries = mapCountriesResponse(countries).sort((a, b) =>
    sortAlphabeticallyByName(a, b)
  );

  return (
    <main className={styles.main}>
      <div className={styles.filterResultsSection}>
        <SearchBar />
        <Dropdown />
      </div>
      <CountriesList countries={mappedCountries} />
    </main>
  );
}
