import { FaSearch } from "react-icons/fa";
import {
  getAirPollution,
  getCountry,
  getWeatherData,
} from "@/services/WeatherAPI";
import React, { useState } from "react";
import { useWeatherContext } from "@/contexts/weatherCtx";
import { ICountryData } from "@/interfaces/WeatherData";
import Image from "next/image";
import { CountryCode } from "@/services/Countries";
import { useAirContext } from "@/contexts/airCtx";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState<ICountryData>();
  const { weatherData } = useWeatherContext();
  // const [countryName, setCountryName] = useState<ICountryName>();

  const { setWeatherData } = useWeatherContext();
  const { setAirData } = useAirContext();

  const fetchData = async (value: string, lat: number, lon: number) => {
    const data = await getWeatherData(value);
    const airData = await getAirPollution(lat, lon);

    setAirData(airData);
    setWeatherData(data);
  };

  const fetchCountry = async (value: string) => {
    const data = await getCountry(value);
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

      fetchData(input, weatherData.coord.lat, weatherData.coord.lon);
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
    fetchData(input, weatherData?.coord.lat, weatherData?.coord.lon);
  };

  const ChangeUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);

    if (event.target.value != "") {
      fetchCountry(event.target.value);
    }
  };

  const clickCity = (value: string) => {
    if (
      weatherData?.coord.lat === undefined ||
      weatherData.coord.lon === undefined
    ) {
      return "";
    }

    fetchData(value, weatherData?.coord.lat, weatherData?.coord.lon);
  };

  const searchColor = input == "" ? "4a74ff" : "fff ",
    searchStyle = input == "" ? "rounded-lg" : "rounded-t-lg",
    dropStyle = input == "" ? "opacity-0 hidden" : "opacity-100 block";

  return (
    <form action="" className="flex flex-col relative">
      <div
        className={`flex items-center ${searchStyle} bg-[#222] transition-all`}
      >
        <button
          className={`px-[10px] py-[10px] text-[#${searchColor}] transition-all`}
          onClick={ClickUpdate}
        >
          <FaSearch className="w-4 h-4" />
        </button>
        <input
          type="text"
          className="text-neutral-200 bg-transparent placeholder:text-neutral-500 text-sm font-medium pr-16 py-2 placeholder:w-min outline-none "
          placeholder="Search your city..."
          onKeyDown={Update}
          onChange={ChangeUpdate}
          value={input}
        />
      </div>
      <div
        className={`flex items-start w-full absolute top-12 ${dropStyle} transition-all duration-200`}
      >
        <ul className="flex flex-col gap-2 bg bg-[#202020] w-full rounded-b-lg transition-all">
          {country &&
            country.map((countryD, index) => {
              const { country, state, name } = countryD;
              const comma = state ? ", " : "";
              function getCountryName(code: string) {
                return CountryCode[code];
              }

              return (
                <li
                  className="flex gap-2 items-center hover:bg-[#2c2c2c] transition-all duration-200"
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
                      <span className="font-semibold text-neutral-200 text-sm text-nowrap max-w-[175px] truncate text-start">
                        {name}
                      </span>
                      <p className="text-xs font-semibold text-neutral-500 text-nowrap max-w-[175px] truncate text-start">
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
