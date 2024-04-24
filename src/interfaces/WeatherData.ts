export interface IWeatherData {
  name: string;
  timezone: number;
  dt: number;
  sys: {
    country: string;
  };
  main: {
    feels_like: number;
    temp: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
}

export type ICountryData = [ICountry];

export interface ICountry {
  name: string;
  state: string;
  country: string;
}

export interface ICountryName {
  0: {
    name: {
      common: string;
    };
  };
}
