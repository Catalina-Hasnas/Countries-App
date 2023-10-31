import { CountryList, CountryResponse } from "@/components/CountryList";
import { FilteredResults } from "@/components/FilteredResults/FilteredResults";

type Region = "africa" | "america" | "asia" | "europe" | "oceania";

const getCountriesByRegion = async (name: Region) => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export async function generateStaticParams() {
  return [
    { name: "africa" },
    { name: "america" },
    { name: "asia" },
    { name: "europe" },
    { name: "oceania" },
  ];
}

const getCountriesByRegionAndName = (
  countries: CountryResponse[],
  searchValue: string
) => {
  return countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });
};

export const dynamicParams = false;

export default async function Page({
  params,
  searchParams,
}: {
  params: { name: Region };
  searchParams: { search: string };
}) {
  const { name } = params;

  const rawCountries = await getCountriesByRegion(name);

  const { search } = searchParams;

  const countries = search
    ? getCountriesByRegionAndName(rawCountries, search)
    : rawCountries;

  return (
    <FilteredResults>
      <CountryList countries={countries} />
    </FilteredResults>
  );
}
