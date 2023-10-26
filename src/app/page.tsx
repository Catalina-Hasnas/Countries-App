import { CountriesList } from "./components/CountriesList";
import { FilterResults } from "./components/FilterResults";

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

  return (
    <>
      <FilterResults />
      <CountriesList countries={countries} />
    </>
  );
}
