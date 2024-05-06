type ForecastListItem = {
  dt: number;
  main: {
    temp: number;
  };
};

export interface IForecastData {
  city: {
    timezone?: number;
  };
  list: ForecastListItem[];
}
