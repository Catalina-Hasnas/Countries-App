import Link from "next/link";
import styles from "../countryDetails.module.css";

export const BorderCountries = ({
  borderCountries,
}: {
  borderCountries: string[];
}) => {
  return (
    <div className={styles.borderCountries}>
      <h3>Border Countries:</h3>
      <nav>
        <ul>
          {borderCountries.map((borderCountry, index) => {
            return (
              <li className="appShadow" key={index}>
                <Link href={`/${borderCountry}`}>{borderCountry}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
