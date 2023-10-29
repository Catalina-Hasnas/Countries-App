type NativeLanguage = {
  official: string;
  common: string;
};

type Currency = {
  name: string;
  symbol: string;
};

export interface CountryDetailsResponse {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, NativeLanguage>;
  };
  region: string;
  subregion: string;
  population: number;
  capital: string[];
  tld: string[];
  currencies: Record<string, Currency>;
  languages: Record<string, string>;
  borders: string[];
  flags: {
    svg: string;
  };
}

export interface CountryDetailsWithBorders extends CountryDetailsResponse {
  borderCountries: Pick<CountryDetailsResponse, "name">[];
}

export interface CountryDetailsMapped {
  commonName: string;
  officialName: string;
  nativeNames: string;
  region: string;
  subregion: string;
  population: string;
  capitals: string;
  tld: string;
  currencies: string;
  languages: string;
  flagSrc: string;
  borderCountries: string[];
}

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
