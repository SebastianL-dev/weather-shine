import { FaSearch } from "react-icons/fa";
import { getWeatherData } from "@/services/WeatherAPI";
import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const Update = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = event.currentTarget.value;
      setInput(inputValue);
    }
  };

  return (
    // <form action="" className="flex items-center">
    //   {/* <button className="px-[10px] py-[10px] bg-[#4a74ff] rounded-s-lg">
    //     <FaSearch className="w-4 h-4" />
    //   </button> */}
    // </form>
    <>
      <input
        type="text"
        className="bg-[#222] rounded-e-lg text-neutral-200 placeholder:text-neutral-500 text-sm font-medium px-4 py-2 placeholder:w-min outline-none "
        placeholder="Search your country..."
        onKeyDown={Update}
      />
      <h1>{input}</h1>
    </>
  );
}
