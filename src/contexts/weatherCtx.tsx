"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { IWeatherData } from "@/interfaces/WeatherData";
import { getAirPollution, getWeatherData } from "@/services/WeatherAPI";

export interface IWeatherContext {
  weatherData?: IWeatherData;
  setWeatherData: (data: IWeatherData) => void;
}

export const WeatherContext = createContext<IWeatherContext>(
  {} as IWeatherContext
);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weather, setWeather] = useState<IWeatherData>();

  const setWeatherData = (data: IWeatherData) => {
    setWeather(data);
  };

  useEffect(() => {
    const fetchData = async (value: string) => {
      const data = await getWeatherData(value);
      setWeatherData(data);
      // const dataA = await getAirPollution("-66.8792", "10.488");
    };
    fetchData("caracas");
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData: weather, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
