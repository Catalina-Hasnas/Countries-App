import {
  CountryDetails,
  CountryDetailsResponse,
  CountryDetailsWithBorders,
} from "@/components/CountryDetails";
import { CountryResponse } from "@/components/CountryList/types";

const getCountriesByAlphaCodes = async (alphaCodes: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${alphaCodes}&fields=name`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getCountryByNameWithBorders = async (name: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,capital,population,region,subregion,tld,currencies,languages,flags,borders`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const country: CountryDetailsResponse[] = await res.json();

  const borderCountriesAlphaCodes = country[0].borders?.join(",") || "";
  let borderCountries: Pick<CountryDetailsResponse, "name">[] = [];

  if (borderCountriesAlphaCodes) {
    borderCountries = await getCountriesByAlphaCodes(borderCountriesAlphaCodes);
  }

  const countryWithBorderNames: CountryDetailsWithBorders = {
    ...country[0],
    borderCountries,
  };

  return countryWithBorderNames;
};

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all", { next: {} });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const countryList: CountryResponse[] = await res.json();

  return countryList.map((country) => ({
    name: country.name.common,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const country: CountryDetailsWithBorders = await getCountryByNameWithBorders(
    name
  );

  return {
    title: `${country.name.common}`,
    icons: { icon: country.flags.svg },
  };
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params;

  const country: CountryDetailsWithBorders = await getCountryByNameWithBorders(
    name
  );

  return <CountryDetails country={country} />;
}
