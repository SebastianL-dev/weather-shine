export interface IWeatherData {
  coord: {
    lon?: number;
    lat?: number;
  };
  name: string;
  timezone: number;
  dt: number;
  sys: {
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  main: {
    feels_like: number;
    temp: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
}

export type ICountryData = [ICountry];

export interface ICountry {
  name: string;
  state: string;
  country: string;
}

// export interface ICountryName {
//   0: {
//     name: {
//       common: string;
//     };
//   };
// }
