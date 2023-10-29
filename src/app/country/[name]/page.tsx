import { CountryDetails } from "@/app/components/CountryDetails";
import {
  CountryDetailsResponse,
  CountryDetailsWithBorders,
} from "@/app/components/CountryDetails/utils";
import { CountryResponse } from "@/app/utils";

const getCountryByName = async (name: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,capital,population,region,subregion,tld,currencies,languages,flags,borders`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getCountriesByAlphaCodes = async (alphaCodes: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${alphaCodes}&fields=name`
  );
  if (!res.ok) {
    return [];
  }
  return res.json();
};

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const countryList: CountryResponse[] = await res.json();

  return countryList.map((country) => ({
    name: country.name.common,
  }));
}

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params;

  const country: CountryDetailsResponse[] = await getCountryByName(name);

  const borderCountriesAlphaCodes = country[0].borders?.join(",") || "";

  const borderCountries: Pick<CountryDetailsResponse, "name">[] =
    await getCountriesByAlphaCodes(borderCountriesAlphaCodes);

  const countryWithBorderNames: CountryDetailsWithBorders = {
    ...country[0],
    borderCountries,
  };

  return <CountryDetails country={countryWithBorderNames} />;
}
