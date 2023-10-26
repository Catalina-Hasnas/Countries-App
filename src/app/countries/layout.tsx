import { ReactNode } from "react";
import { FilteredResults } from "../components/FilteredResults";

export default function CountriesLayout({ children }: { children: ReactNode }) {
  return <FilteredResults>{children}</FilteredResults>;
}
