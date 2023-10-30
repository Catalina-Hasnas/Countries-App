import { CountryMapped, CountryResponse } from "./types";

type mapCountriesResponseType = (
  countries: CountryResponse[]
) => CountryMapped[];

export const mapCountriesResponse: mapCountriesResponseType = (countries) => {
  return countries.map((country) => ({
    name: country.name.common,
    flagSrc: country.flags.svg,
    capital: country.capital?.length ? country.capital[0] : "",
    population: country.population.toLocaleString("en-US"),
    region: country.region,
  }));
};

export const sortAlphabeticallyByName = (
  a: CountryMapped,
  b: CountryMapped
) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
