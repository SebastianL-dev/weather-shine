"use client";

import GlobalHeader from "@/Components/header";
import { getWeatherData } from "@/services/WeatherAPI";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData(getWeatherData());
  // });

  // const data = getWeatherData();
  // console.log(data.then);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData();
      // const data = res.json();
      setData(data);

      console.log(data);
    };

    fetchData();
    // console.log(data);
  }, []);
  return (
    <>
      <GlobalHeader />
      <main>
        <span className="text-white" id="countryName">
          {/* {data.name} */}
        </span>
        <span className="text-white" id="countryName2"></span>
      </main>
    </>
  );
}
