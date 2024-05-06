"use client";

import { IAirData } from "@/interfaces/AirData";
import { getAirPollution } from "@/services/WeatherAPI";
import { createContext, useContext, useEffect, useState } from "react";

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
  const [air, setAir] = useState<IAirData>();

  const setAirData = (data: IAirData) => {
    setAir(data);
  };

  useEffect(() => {
    const fetchData = async (value1: number, value2: number) => {
      const data = await getAirPollution(value1, value2);
      setAirData(data);
    };

    fetchData(10.488, -66.8792);
  }, []);

  return (
    <AirContext.Provider value={{ airData: air, setAirData }}>
      {children}
    </AirContext.Provider>
  );
};

export const useAirContext = () => useContext(AirContext);
