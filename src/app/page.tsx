"use client";

import { GeneralInfo, OtherInfoCard } from "@/Components/cards";
import GlobalHeader from "@/Components/header";
import { poppins } from "@/styles/fonts";
import { useWeatherContext } from "@/contexts/weatherCtx";
import { CountryCode } from "@/services/Countries";
import { useAirContext } from "@/contexts/airCtx";
// import RMap from "@/services/Map";

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
        className={`flex flex-col gap-6 pt-40 ${poppins.className} antialiased mx-auto`}
      >
        <section className=" gap-8 flex-wrap grid 2xl:grid-flow-col grid-flow-row justify-items-center w-min m-auto">
          <div className="flex flex-col 2xl:justify-self-end max-2xl:flex-row gap-4 justify-between justify-items-center w-full max-lg:flex-col">
            <GeneralInfo
              name={`${weatherData?.name} - ${
                weatherData?.sys?.country
                  ? getCountryName(weatherData.sys.country)
                  : ""
              }`}
              temp={weatherData && (weatherData?.main.temp).toFixed(1)}
              like={
                weatherData &&
                parseFloat(weatherData.main.feels_like.toFixed(1))
              }
              pressure={weatherData?.main.pressure}
              humidity={weatherData?.main.humidity}
              visibility={
                weatherData &&
                parseFloat((weatherData.visibility / 1000).toFixed(2))
              }
              timezone={weatherData?.timezone}
              dt={weatherData?.dt}
            />
            {/* <RMap /> */}
          </div>
          <OtherInfoCard
            speed={weatherData?.wind.speed}
            degree={weatherData?.wind.deg}
            sunrise={weatherData?.sys.sunrise}
            sunset={weatherData?.sys.sunset}
            timezone={weatherData?.timezone}
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
