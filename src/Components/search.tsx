import { FaSearch } from "react-icons/fa";
import {
  getCountry,
  getCountryData,
  getWeatherData,
} from "@/services/WeatherAPI";
import React, { ReactNode, useEffect, useState } from "react";
import { useWeatherContext } from "@/contexts/weatherCtx";
import { ICountryData } from "@/interfaces/WeatherData";
import { MdPlace } from "react-icons/md";
import { count } from "console";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState<ICountryData>();

  const { setWeatherData } = useWeatherContext();

  const fetchData = async (value: string) => {
    const data = await getWeatherData(value);
    setWeatherData(data);
  };

  const fetchCountry = async (value: string) => {
    const data = await getCountry(value);
    setCountry(data);

    // Solve issues
    if (data != undefined) {
      const countryInfo = await getCountryData(data[0].country);
    }
  };

  const Update = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // localStorage.setItem("location", input);
      fetchData(input);
      event.preventDefault();
    }
  };

  const ClickUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData(input);
  };

  const ChangeUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);

    if (event.target.value != "") {
      fetchCountry(event.target.value);
    }
  };

  return (
    <form action="" className="flex flex-col relative">
      <div className="flex items-center">
        <button
          className="px-[10px] py-[10px] bg-[#4a74ff] rounded-s-lg"
          onClick={ClickUpdate}
        >
          <FaSearch className="w-4 h-4" />
        </button>
        <input
          type="text"
          className="bg-[#222] rounded-e-lg text-neutral-200 placeholder:text-neutral-500 text-sm font-medium px-4 py-2 placeholder:w-min outline-none "
          placeholder="Search your city..."
          onKeyDown={Update}
          onChange={ChangeUpdate}
          value={input}
        />
      </div>
      <div className="flex items-start w-full absolute top-10">
        <ul className="flex flex-col gap-2 bg bg-[#222] w-full">
          {country &&
            country.map((country, index) => {
              return (
                <li className="flex gap-3 px-2 py-2 items-center" key={index}>
                  <MdPlace className="h-6 w-6 text-[#4a74ff]" />
                  <div className="flex flex-col pl-2">
                    <span className="font-semibold text-neutral-200 text-sm">
                      {country.name}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {country.state}, {country.country}
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </form>
  );
}
