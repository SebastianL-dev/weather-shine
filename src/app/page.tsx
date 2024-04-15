"use client";

import { GeneralInfo } from "@/Components/cards";
import GlobalHeader from "@/Components/header";
import { getWeatherData } from "@/services/WeatherAPI";
import { poppins } from "@/styles/fonts";
import { useEffect, useState } from "react";

interface WeatherData {
  cod: number;
  name: string;
  timezone: number;
  main: {
    temp_min: number;
    temp: number;
    temp_max: number;
  };
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchData("colombia");
  }, []);

  const fetchData = async (value: string) => {
    const data = await getWeatherData(value);
    setData(data);
  };

  const Update = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = event.currentTarget.value;
      setInput(inputValue);
      fetchData(inputValue);
    }
  };

  return (
    <>
      <GlobalHeader />
      <main
        className={`flex flex-col gap-6 pt-40 ${poppins.className} antialiased mx-auto w-max`}
      >
        {/* <span className="text-white">{data && data.name}</span>
        <span className="text-white">{data && data.main.temp_min}</span>
        <span className="text-white">{data && data.main.temp}</span>
        <span className="text-white">{data && data.main.temp_max}</span>
        <span className="text-white">{data && data.timezone}</span>
        <input type="text" name="" id="" onKeyDown={Update} />
        <span className="text-white">{input}</span> */}
        <section>
          <GeneralInfo />
        </section>
      </main>
    </>
  );
}
