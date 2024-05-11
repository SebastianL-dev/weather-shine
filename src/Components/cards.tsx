import { Separator1 } from "./separators";
import { FaRegClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineCompress, MdPlace, MdSpeed } from "react-icons/md";
import { ReactElement, useEffect, useState } from "react";
import { RiWaterPercentLine } from "react-icons/ri";
import { LuWaves } from "react-icons/lu";
import { IoEyeOutline, IoMoon, IoSunny } from "react-icons/io5";
import { PiWindDuotone } from "react-icons/pi";
import { TbLocation, TbSunset2 } from "react-icons/tb";
import { AirData, TempInfo } from "./apiData";
import LineChart from "./Charts/weatherChart";
import { TempSwiper } from "./Sliders/tempSwiper";

export function GeneralInfo({
  name,
  temp,
  like,
  pressure,
  humidity,
  visibility,
}: {
  name?: string;
  temp?: string;
  like?: string;
  pressure?: number;
  humidity?: number;
  visibility?: string;
}) {
  return (
    <div className="flex text-white asd w-max p-4 rounded-xl flex-col gap-8 h-max z-0 backdrop-blur-[1px] bg-blue-700 bg-opacity-5 border-[1px] border-blue-950 border-opacity-80 relative overflow-hidden bdcrd">
      <div className="flex gap-2 items-center after:w-full after:h-[58px] after:bg-blue-500 after:absolute after:bg-opacity-10 after:inset-0 after:-z-10 after:border-b-[1px] after:border-blue-950 after:border-opacity-80">
        <MdPlace className="h-6 w-6 text-[#4a74ff]" />
        <h1 className="font-medium text-xl text-white">{name}</h1>
      </div>
      <div className="flex w-full gap-8 h-full">
        <div className="flex gap-2 items-center flex-col">
          <div className="flex gap-8 h-max items-end">
            <TempInfo temp={temp} like={like} />
            <div className="grid gap-3 w-calc(100% + 20px) items-end">
              <MiniCard
                tittle="Pressure"
                image={
                  <MdOutlineCompress className="w-5 h-5 text-blue-300 text-opacity-55" />
                }
                info={`${pressure} hPa`}
                temp={<></>}
              />
              <MiniCard
                tittle="Humidity"
                image={
                  <RiWaterPercentLine className="w-5 h-5 text-blue-300 text-opacity-55" />
                }
                info={`${humidity}%`}
                temp={<></>}
              />
              <MiniCard
                tittle="Visibility"
                image={
                  <IoEyeOutline className="w-5 h-5 text-blue-300 text-opacity-55" />
                }
                info={`${visibility} Km`}
                temp={<></>}
              />
              <MiniCard
                tittle="Sea level"
                image={
                  <LuWaves className="w-5 h-5 text-blue-300 text-opacity-55" />
                }
                info=""
                temp={<></>}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-neutral-200">Date</span>
            <Separator1 />
            <div className="flex gap-2 items-center text-neutral-300">
              <FaRegClock />
              <span className="font-medium text-sm text-neutral-500">
                22:30pm
              </span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300">
              <IoIosCalendar />
              <span className="font-medium text-sm text-neutral-500">
                Wednesday 2, Jun
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OtherInfoCard({
  speed,
  degree,
  sunrise,
  sunset,
  timezone,
  co,
  o3,
  so2,
  no2,
  pm10,
  pm2_5,
}: {
  speed?: number;
  degree?: number;
  sunrise?: number;
  sunset?: number;
  timezone?: number;
  co?: number;
  o3?: number;
  so2?: number;
  no2?: number;
  pm10?: number;
  pm2_5?: number;
}) {
  return (
    <div className="flex text-white w-max p-4 rounded-xl flex-col gap-8 h-max z-0 backdrop-blur-[1px] bg-blue-700 bg-opacity-5 border-[1px] border-blue-950 border-opacity-80 relative overflow-hidden bdcrd">
      <div className="flex rounded-md h-full w-full flex-col gap-4">
        <div className="after:w-full after:h-[58px] after:bg-blue-500 after:absolute after:bg-opacity-10 after:inset-0 after:-z-10 after:border-b-[1px] after:border-blue-950 after:border-opacity-80">
          <h2 className="font-semibold text-xl">General</h2>
        </div>
        {/* <Separator1 /> */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-12">
            <div className="flex flex-col gap-8 justify-end py-4">
              <WindCard speed={speed} degree={degree} />
              <SunriseSunsetCard
                sunrise={sunrise}
                sunset={sunset}
                timezone={timezone}
              />
            </div>
            <div className="w-[600px] h-min rounded-lg p-4 ">
              <LineChart />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <AirPollutionCard
              co={co}
              o3={o3}
              so2={so2}
              no2={no2}
              pm10={pm10}
              pm2_5={pm2_5}
            />
            <div className="flex justify-center w-full">
              <TempSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WindCard({
  speed,
  degree,
}: {
  speed?: number;
  degree?: number;
}) {
  const [calcDeg, setCalcDeg] = useState<string>();
  useEffect(() => {
    if ((degree && degree > 340) || (degree && degree < 20)) {
      setCalcDeg("rotate-45");
    } else if (degree && degree >= 20 && degree && degree < 70) {
      setCalcDeg("rotate-0");
    } else if (degree && degree >= 70 && degree && degree < 110) {
      setCalcDeg("-rotate-45");
    } else if (degree && degree >= 110 && degree && degree < 150) {
      setCalcDeg("-rotate-90");
    } else if (degree && degree >= 150 && degree && degree < 200) {
      setCalcDeg("-rotate-180");
    } else if (degree && degree >= 200 && degree && degree < 250) {
      setCalcDeg("rotate-180");
    } else if (degree && degree >= 250 && degree && degree < 290) {
      setCalcDeg("rotate-[135deg]");
    } else if (degree && degree >= 290 && degree && degree < 340) {
      setCalcDeg("rotate-90");
    }
  });

  return (
    <div className="bg-blue-950 bg-opacity-50 border-[1px] border-blue-900 border-opacity-30 py-3 px-4 grid gap-6 rounded-md">
      <div className="flex gap-2">
        <h1 className="text-base font-medium text-neutral-300">
          Wind information
        </h1>
        <PiWindDuotone className="h-6 w-6 text-[#4a74ff]" />
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex text-sm gap-2 items-center">
          <MdSpeed className="h-6 w-6 text-neutral-400" />
          <div className="flex justify-between w-full">
            <span className="text-neutral-400">Speed</span>{" "}
            <span>{speed} m/s</span>
          </div>
        </li>
        <li className="flex text-sm gap-2 items-center">
          <TbLocation className={`h-6 w-6 text-neutral-400 ${calcDeg}`} />
          <div className="flex justify-between w-full">
            <span className="text-neutral-400">Degree</span>{" "}
            <span>{degree}°</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export function AirPollutionCard({
  co,
  o3,
  so2,
  no2,
  pm10,
  pm2_5,
}: {
  co?: number;
  o3?: number;
  so2?: number;
  no2?: number;
  pm10?: number;
  pm2_5?: number;
}) {
  const [coIndex, setCoIndex] = useState<number>();
  const [o3Index, setO3Index] = useState<number>();
  const [so2Index, setSo2Index] = useState<number>();
  const [no2Index, setNo2Index] = useState<number>();
  const [pm10Index, setPm10Index] = useState<number>();
  const [pm2_5Index, setPm2_5Index] = useState<number>();

  const [finalIndex, setFinalIndex] = useState<number>(0);

  useEffect(() => {
    if (co && o3 && so2 && no2 && pm10 && pm2_5) {
      if (co >= 0 && co < 4400) setCoIndex(1);
      else if (co >= 4400 && co < 9400) setCoIndex(2);
      else if (co >= 9400 && co < 12400) setCoIndex(3);
      else if (co >= 12400 && co < 15400) setCoIndex(4);
      else if (co >= 15400) setCoIndex(5);

      if (o3 >= 0 && o3 < 60) setO3Index(1);
      else if (o3 >= 60 && o3 < 100) setO3Index(2);
      else if (o3 >= 100 && o3 < 140) setO3Index(3);
      else if (o3 >= 140 && o3 < 180) setO3Index(4);
      else if (o3 >= 180) setO3Index(5);

      if (so2 >= 0 && so2 < 80) setSo2Index(1);
      else if (so2 >= 80 && so2 < 250) setSo2Index(2);
      else if (so2 >= 250 && so2 < 350) setSo2Index(3);
      else if (so2 >= 350) setSo2Index(4);
      else if (co >= 350) setCoIndex(5);

      if (no2 >= 0 && no2 < 40) setNo2Index(1);
      else if (no2 >= 40 && no2 < 70) setNo2Index(2);
      else if (no2 >= 70 && no2 < 150) setNo2Index(3);
      else if (no2 >= 150 && no2 < 200) setNo2Index(4);
      else if (no2 >= 200) setNo2Index(5);

      if (pm10 >= 0 && pm10 < 20) setPm10Index(1);
      else if (pm10 >= 20 && pm10 < 50) setPm10Index(2);
      else if (pm10 >= 50 && pm10 < 100) setPm10Index(3);
      else if (pm10 >= 100 && pm10 < 200) setPm10Index(4);
      else if (pm10 >= 200) setPm10Index(5);

      if (pm2_5 >= 0 && pm2_5 < 10) setPm2_5Index(1);
      else if (pm2_5 >= 10 && pm2_5 < 25) setPm2_5Index(2);
      else if (pm2_5 >= 25 && pm2_5 < 50) setPm2_5Index(3);
      else if (pm2_5 >= 50 && pm2_5 < 75) setPm2_5Index(4);
      else if (pm2_5 >= 75) setPm2_5Index(5);

      if (coIndex && o3Index && so2Index && no2Index && pm10Index && pm2_5Index)
        setFinalIndex(
          (coIndex + o3Index + so2Index + no2Index + pm10Index + pm2_5Index) / 6
        );
    }
  });
  const getColorClass = (finalIndex: number): string => {
    const colorClasses: { [key: number]: string } = {
      1: "text-green-500 bg-green-500",
      2: "text-cyan-500 bg-cyan-500",
      3: "text-yellow-500 bg-yellow-500",
      4: "text-orange-500 bg-orange-500",
      5: "text-red-500 bg-red-500",
    };

    return colorClasses[finalIndex] || "";
  };

  const getNameClass = (finalIndex: number): string => {
    const nameClasses: { [key: number]: string } = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very poor",
    };

    return nameClasses[finalIndex] || "";
  };

  const color: string = getColorClass(parseFloat(finalIndex.toFixed(0)));
  const name: string = getNameClass(parseFloat(finalIndex.toFixed(0)));

  return (
    <div className="bg-blue-950 bg-opacity-50 border-[1px] border-blue-900 border-opacity-30 py-3 px-4 grid gap-6 rounded-md w-max">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <h1 className="text-base font-medium text-neutral-300">
            Air pollution (μg/m3)
          </h1>
          <PiWindDuotone className="h-6 w-6 text-[#4a74ff]" />
        </div>
        <div
          className={`flex text-sm ${color} rounded-full bg-opacity-15 px-4 py-1`}
        >
          <span className={`${color} bg-opacity-0 bg`}>{name}</span>
        </div>
      </div>
      <div>
        <ul className="grid items-center grid-cols-3 gap-x-4 gap-y-4 w-max content-center">
          <AirData symbol="CO" name="carbon monoxide" value={co} />
          <AirData symbol="O3" name="Ozone" value={o3} />
          <AirData symbol="SO2" name="Sulfur dioxide" value={so2} />
          <AirData symbol="NO2" name="Nitrogen dioxide" value={no2} />
          <AirData symbol="PM10" name="Particles" value={pm10} />
          <AirData symbol="PM2.5" name="Particles" value={pm2_5} />
        </ul>
      </div>
    </div>
  );
}

export function SunriseSunsetCard({
  sunrise,
  sunset,
  timezone,
}: {
  sunrise?: number;
  sunset?: number;
  timezone?: number;
}) {
  const Dates = (date?: number) => {
    if (date === undefined) {
      return "";
    }
    if (timezone === undefined) {
      return "";
    }

    const localTime = date * 1000;
    const timeOffset = timezone * 1000;
    const localDate = new Date(localTime + timeOffset);

    const formattedLocalSunrise = localDate.toLocaleTimeString("es-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
    });

    return formattedLocalSunrise;
  };

  return (
    <div className="bg-blue-950 bg-opacity-50 border-[1px] border-blue-900 border-opacity-30 py-3 px-4 grid gap-6 rounded-md">
      <div className="flex gap-2">
        <h1 className="text-base font-medium text-neutral-300">
          Sunrise & sunset
        </h1>
        <TbSunset2 className="h-6 w-6 text-[#4a74ff]" />
      </div>
      <div>
        <ul className="flex justify-between gap-8">
          <li className="flex text-sm gap-2 items-center">
            <div className="flex justify-between w-full flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoSunny className="h-5 w-5 text-neutral-400" />
                <span className="text-neutral-400">Sunrise</span>
              </div>
              <span className=" text-2xl">{Dates(sunrise)}</span>
            </div>
          </li>
          <li className="flex text-sm gap-2 items-center">
            <div className="flex justify-between w-full flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoMoon className={`h-5 w-5 text-neutral-400`} />
                <span className="text-neutral-400">Sunset</span>
              </div>
              <span className="text-2xl">{Dates(sunset)}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function MiniCard({
  tittle,
  image,
  info,
  temp,
}: {
  tittle: string;
  image: ReactElement;
  info: string;
  temp: ReactElement;
}) {
  return (
    <div className="flex gap-4 self-start w-full">
      <div className="flex items-center justify-between bg-blue-950 bg-opacity-50 border-[1px] border-blue-900 border-opacity-30 py-2 px-4 rounded-md h-max w-full gap-12">
        <div className="flex gap-2 items-center">
          {image}
          <h1 className="text text-blue-300 text-opacity-55 text-sm self-center">
            {tittle}
          </h1>
        </div>
        <span className="text-sm font-medium text-blue-50 opacity-80">
          {info}
        </span>
        {temp}
      </div>
    </div>
  );
}
