"use client";

import { IForecastData } from "@/interfaces/Forecast";
import { getForecast } from "@/services/WeatherAPI";
import { createContext, useContext, useEffect, useState } from "react";

export interface IForecastContext {
  forecastData?: IForecastData;
  setForecastData: (data: IForecastData) => void;
}

export const ForecastContext = createContext<IForecastContext>(
  {} as IForecastContext
);

export const ForecastProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [forecast, setForecast] = useState<IForecastData>();

  const setForecastData = (data: IForecastData) => {
    setForecast(data);
  };

  useEffect(() => {
    const fetchData = async (value1: number, value2: number) => {
      const data = await getForecast(value1, value2);
      setForecastData(data);
    };

    fetchData(10.488, -66.8792);
  }, []);

  return (
    <ForecastContext.Provider
      value={{ forecastData: forecast, setForecastData }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecastContext = () => useContext(ForecastContext);
