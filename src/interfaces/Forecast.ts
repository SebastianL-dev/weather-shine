type ForecastListItem = {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    0: {
      main: string;
    };
  };
};

export interface IForecastData {
  city: {
    timezone?: number;
  };
  list: ForecastListItem[];
}
