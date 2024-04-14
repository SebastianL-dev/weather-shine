"use client";

import GlobalHeader from "@/Components/header";
import { getWeatherData } from "@/services/WeatherAPI";
import { useEffect, useState } from "react";

interface WeatherData {
  cod: string;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalHeader />
      <main>
        <span className="text-white">{data && data.name}</span>
        <span className="text-white">{data && data.cod}</span>
      </main>
    </>
  );
}
