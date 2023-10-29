import { CountryList } from "@/app/components/CountryList";

async function getCountries(name?: string) {
  const reqPath = name ? `/name/${name}` : "/all";
  const res = await fetch(
    `https://restcountries.com/v3.1${reqPath}?fields=name,capital,population,region,flags`
  );
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const searchName = searchParams.search;
  const countries = await getCountries(searchName);

  return <CountryList countries={countries} />;
}
