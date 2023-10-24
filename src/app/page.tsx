import styles from "./page.module.css";

async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  // const countries = await getCountries();
  return (
    <main className={styles.main}>
      <p> I am a child of main </p>
    </main>
  );
}
