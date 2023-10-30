import { CountryDetailsMapped, CountryDetailsWithBorders } from "./types";

type mapCountryDetailsResponseType = (
  country: CountryDetailsWithBorders
) => CountryDetailsMapped;

export const mapCountryDetailsResponse: mapCountryDetailsResponseType = (
  country
) => {
  return {
    commonName: country.name.common || "",
    officialName: country.name.official || "",
    nativeNames: Object.values(country.name.nativeName)
      .map((nativeName) => nativeName?.common || "")
      .join(", "),
    region: country.region,
    subregion: country.subregion,
    population: country.population?.toLocaleString("en-US") || "",
    capitals: country.capital.join(", "),
    tld: country.tld.join(", "),
    currencies: Object.values(country.currencies)
      .map(
        (currency) =>
          `${currency.name || ""} ${
            currency.symbol ? `( ${currency.symbol} )` : ""
          }`
      )
      .join(", "),
    languages: Object.values(country.languages).join(", "),
    flagSrc: country.flags?.svg || "",
    borderCountries: country.borderCountries.map((country) => {
      return country.name.common;
    }),
  };
};
