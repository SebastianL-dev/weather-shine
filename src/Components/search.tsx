import { FaSearch } from "react-icons/fa";
import {
  getAirPollution,
  getCountry,
  getForecast,
  getWeatherData,
} from "@/services/WeatherAPI";
import React, { useState } from "react";
import { useWeatherContext } from "@/contexts/weatherCtx";
import { ICountryData } from "@/interfaces/WeatherData";
import Image from "next/image";
import { CountryCode } from "@/services/Countries";
import { useAirContext } from "@/contexts/airCtx";
import { useForecastContext } from "@/contexts/forecastCtx";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState<ICountryData>();
  const { weatherData } = useWeatherContext();

  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();

  const { setWeatherData } = useWeatherContext();
  const { setAirData } = useAirContext();
  const { setForecastData } = useForecastContext();

  const fetchData = async (value: string, lat: number, lon: number) => {
    const data = await getWeatherData(value);
    const airData = await getAirPollution(lat, lon);
    const forecastData = await getForecast(lat, lon);

    setWeatherData(data);
    setAirData(airData);
    setForecastData(forecastData);
  };

  const fetchCountry = async (value: string) => {
    const data = await getCountry(value);

    if (data) {
      setLat(data[0]?.lat);
      setLon(data[0]?.lon);
    }
    setCountry(data);
  };

  const Update = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // localStorage.setItem("location", input);
      if (
        weatherData?.coord.lat === undefined ||
        weatherData.coord.lon === undefined
      ) {
        return "";
      }

      if (lat && lon) {
        fetchData(input, lat, lon);
      }
      event.preventDefault();
    }
  };

  const ClickUpdate = (event: React.FormEvent) => {
    if (
      weatherData?.coord.lat === undefined ||
      weatherData.coord.lon === undefined
    ) {
      return "";
    }

    event.preventDefault();
    if (lat && lon) {
      fetchData(input, lat, lon);
    }
  };

  const ChangeUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);

    if (event.target.value != "") {
      fetchCountry(event.target.value);
    }
  };

  const clickCity = (value: string) => {
    if (lat && lon) {
      fetchData(input, lat, lon);
    }
  };

  const searchStyle = input == "" ? "rounded-full" : "rounded-full",
    dropStyle = input == "" ? "opacity-0 hidden" : "opacity-100 block";

  return (
    <form action="" className="flex flex-col relative">
      <div
        className={`flex items-center ${searchStyle} bg-blue-800 bg-opacity-15 border border-blue-500 border-opacity-20 transition-all gap-1`}
      >
        <input
          type="text"
          className="text-neutral-200 bg-transparent placeholder:text-blue-200 placeholder:text-opacity-55 text-sm font-medium pl-4 py-2 placeholder:w-min outline-none "
          placeholder="Type a city name..."
          onKeyDown={Update}
          onChange={ChangeUpdate}
          value={input}
        />
        <button
          className={`px-[12px] text-sm py-1 transition-all text-blue-100 text-opacity-80 bg-blue-500 rounded-full m-1 border border-blue-500 bg-opacity-15 border-opacity-25`}
          onClick={ClickUpdate}
        >
          Search
        </button>
      </div>
      <div
        className={`flex items-start w-full absolute top-12 ${dropStyle} transition-all duration-200 `}
      >
        <ul className="flex flex-col gap-2 bg-blue-500 bg-opacity-15 mt-2 border border-blue-500 border-opacity-20 backdrop-brightness-[0.3] backdrop-blur w-full rounded-lg transition-all overflow-hidden">
          {country &&
            country.map((countryD, index) => {
              const { country, state, name } = countryD;
              const comma = state ? ", " : "";
              function getCountryName(code: string) {
                return CountryCode[code];
              }

              return (
                <li
                  className="flex gap-2 items-center hover:bg-blue-500 hover:bg-opacity-15 transition-all duration-200"
                  key={index}
                >
                  <button
                    className="flex items-center gap-4 w-full transition-all px-4 py-3"
                    onClick={() => {
                      event?.preventDefault();
                      clickCity(name + "," + getCountryName(country));
                    }}
                  >
                    <Image
                      src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
                      width={28}
                      height={15}
                      alt=""
                      className="transition-all w-8 h-auto"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-100 text-opacity-80 text-sm text-nowrap max-w-[175px] truncate text-start">
                        {name}
                      </span>
                      <p className="text-xs font-semibold text-blue-300 text-opacity-40 text-nowrap max-w-[175px] truncate text-start">
                        {state}
                        {comma}
                        {getCountryName(country)}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </form>
  );
}
