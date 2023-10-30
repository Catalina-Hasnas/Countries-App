export interface CountryResponse {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  capital: string[];
  region: string;
  population: number;
}

export interface CountryMapped {
  name: string;
  flagSrc: string;
  capital: string;
  region: string;
  population: string;
}
