"use client";

import { GeneralInfo, WindCard, OtherInfoCard } from "@/Components/cards";
import GlobalHeader from "@/Components/header";
import { poppins } from "@/styles/fonts";
import { useWeatherContext } from "@/contexts/weatherCtx";
import { CountryCode } from "@/services/Countries";
import { useEffect } from "react";
import { useAirContext } from "@/contexts/airCtx";

export default function Home() {
  const { weatherData } = useWeatherContext();
  const { airData } = useAirContext();
  function getCountryName(code: string) {
    return CountryCode[code];
  }

  return (
    <>
      <GlobalHeader />
      <main
        className={`flex flex-col gap-6 pt-40 ${poppins.className} antialiased mx-auto w-max`}
      >
        <section className=" gap-12 flex-wrap grid grid-flow-col">
          <GeneralInfo
            name={`${weatherData?.name} - ${
              weatherData?.sys?.country
                ? getCountryName(weatherData.sys.country)
                : ""
            }`}
            temp={weatherData && (weatherData?.main.temp).toFixed(1)}
            like={weatherData?.main.feels_like}
            pressure={weatherData?.main.pressure}
            humidity={weatherData?.main.humidity}
            visibility={
              weatherData && (weatherData.visibility / 1000).toFixed(2)
            }
          />
          <OtherInfoCard
            speed={weatherData?.wind.speed}
            degree={weatherData?.wind.deg}
            sunrise={weatherData?.sys.sunrise}
            sunset={weatherData?.sys.sunset}
            co={airData?.list[0].components.co}
            o3={airData?.list[0].components.o3}
            so2={airData?.list[0].components.so2}
            no2={airData?.list[0].components.no2}
            pm10={airData?.list[0].components.pm10}
            pm2_5={airData?.list[0].components.pm2_5}
          />
        </section>
        <h1 className="text-white"></h1>
      </main>
    </>
  );
}
