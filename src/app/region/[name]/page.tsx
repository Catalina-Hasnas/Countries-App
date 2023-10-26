import { CountriesList } from "@/app/components/CountriesList";
import { FilterResults } from "@/app/components/FilterResults";

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

export default async function Page({ params }: { params: { name: Region } }) {
  const { name } = params;

  const countries = await getCountriesByRegion(name);

  return (
    <>
      <FilterResults />
      <CountriesList countries={countries} />
    </>
  );
}
