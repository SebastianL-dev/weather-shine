"use client";

import { IAirData } from "@/interfaces/AirData";
import { getAirPollution, getWeatherData } from "@/services/WeatherAPI";
import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherContext } from "./weatherCtx";

export interface IAirContext {
  airData?: IAirData;
  setAirData: (data: IAirData) => void;
}

export const AirContext = createContext<IAirContext>({} as IAirContext);

export const AirPollutionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { weatherData } = useWeatherContext();

  const [air, setAir] = useState<IAirData>();

  const setAirData = (data: IAirData) => {
    setAir(data);
  };

  useEffect(() => {
    const fetchData = async (value1: number, value2: number) => {
      const data = await getAirPollution(value1, value2);
      setAirData(data);
    };

    fetchData(-66.8792, 10.488);
  }, []);

  return (
    <AirContext.Provider value={{ airData: air, setAirData }}>
      {children}
    </AirContext.Provider>
  );
};

export const useAirContext = () => useContext(AirContext);
