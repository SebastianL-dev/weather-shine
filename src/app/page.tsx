"use client";

import { GeneralInfo, WindCard } from "@/Components/cards";
import GlobalHeader from "@/Components/header";
import { getWeatherData } from "@/services/WeatherAPI";
import { poppins } from "@/styles/fonts";
import { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  timezone: number;
  sys: {
    country: string;
  };
  main: {
    feels_like: number;
    temp: number;
    pressure: number;
    humidity: number;
  };
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchData("caracas");
  }, []);

  const fetchData = async (value: string) => {
    const data = await getWeatherData(value);
    setData(data);
  };

  return (
    <>
      <GlobalHeader />
      <main
        className={`flex flex-col gap-6 pt-40 ${poppins.className} antialiased mx-auto w-max`}
      >
        <section className="flex gap-12">
          <GeneralInfo
            name={`${data && data.name} - ${data && data.sys.country}`}
            temp={data && data.main.temp}
            like={data && data.main.feels_like}
            pressure={data && data.main.pressure}
            humidity={data && data.main.humidity}
          />
          <WindCard />
        </section>
      </main>
    </>
  );
}
