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
