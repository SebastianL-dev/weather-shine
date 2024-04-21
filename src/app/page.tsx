"use client";

import { GeneralInfo, WindCard } from "@/Components/cards";
import GlobalHeader from "@/Components/header";
import { poppins } from "@/styles/fonts";
import { useWeatherContext } from "@/contexts/weatherCtx";

export default function Home() {
  const { weatherData } = useWeatherContext();

  return (
    <>
      <GlobalHeader />
      <main
        className={`flex flex-col gap-6 pt-40 ${poppins.className} antialiased mx-auto w-max`}
      >
        <section className="flex gap-12">
          <GeneralInfo
            name={`${weatherData && weatherData.name} - ${
              weatherData && weatherData.sys.country
            }`}
            temp={weatherData && weatherData.main.temp}
            like={weatherData && weatherData.main.feels_like}
            pressure={weatherData && weatherData.main.pressure}
            humidity={weatherData && weatherData.main.humidity}
          />
          <WindCard />
        </section>
        <h1>{}</h1>
      </main>
    </>
  );
}
