import { Separator1 } from "./separatos";
import { FaRegClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineCompress, MdPlace, MdSpeed } from "react-icons/md";
import { ReactElement, useEffect, useState } from "react";
import { RiWaterPercentLine } from "react-icons/ri";
import { LuWaves } from "react-icons/lu";
import { IoEyeOutline, IoMoon, IoSunny } from "react-icons/io5";
import { PiWindDuotone } from "react-icons/pi";
import { TbLocation, TbSunset2 } from "react-icons/tb";
import { useWeatherContext } from "@/contexts/weatherCtx";
import { AirData, TempInfo } from "./apiData";
import BarChart from "./Charts/weatherChart";

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
  like?: number;
  pressure?: number;
  humidity?: number;
  visibility?: string;
}) {
  return (
    <div className="flex text-white bg-[#222] w-max p-4 rounded-xl flex-col gap-8 h-max">
      <div className="flex gap-2 items-center">
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
                  <MdOutlineCompress className="w-5 h-5 text-neutral-400" />
                }
                info={`${pressure} hPa`}
                temp={<></>}
              />
              <MiniCard
                tittle="Humidity"
                image={
                  <RiWaterPercentLine className="w-5 h-5 text-neutral-400" />
                }
                info={`${humidity}%`}
                temp={<></>}
              />
              <MiniCard
                tittle="Visibility"
                image={<IoEyeOutline className="w-5 h-5 text-neutral-400" />}
                info={`${visibility} Km`}
                temp={<></>}
              />
              <MiniCard
                tittle="Sea level"
                image={<LuWaves className="w-5 h-5 text-neutral-400" />}
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
  co?: number;
  o3?: number;
  so2?: number;
  no2?: number;
  pm10?: number;
  pm2_5?: number;
}) {
  return (
    <div className="flex text-white bg-[#222] w-max p-4 rounded-xl flex-col gap-8 h-max">
      <div className="flex rounded-md h-full w-full flex-col gap-4">
        <div>
          <h2 className="font-semibold text-xl">General</h2>
        </div>
        {/* <Separator1 /> */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-12">
            <div className="flex flex-col gap-8 justify-end py-4">
              <WindCard speed={speed} degree={degree} />
              <SunriseSunsetCard sunrise={sunrise} sunset={sunset} />
            </div>
            <div className="w-[600px] h-min rounded-lg p-4 ">
              <BarChart />
            </div>
          </div>
          <AirPollutionCard
            co={co}
            o3={o3}
            so2={so2}
            no2={no2}
            pm10={pm10}
            pm2_5={pm2_5}
          />
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
    <div className="bg-[#1b1b1b] py-3 px-4 grid gap-6 rounded-md">
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
  return (
    <div className="bg-[#1b1b1b] py-3 px-4 grid gap-6 rounded-md w-max">
      <div className="flex gap-2">
        <h1 className="text-base font-medium text-neutral-300">
          Air pollution
        </h1>
        <PiWindDuotone className="h-6 w-6 text-[#4a74ff]" />
      </div>
      <div>
        <ul className="grid items-center grid-cols-3 gap-x-4 gap-y-4 w-max content-center">
          <AirData symbol="CO" name="carbon monoxide" value={co} />
          <AirData symbol="O3" name="Ozone" value={o3} />
          <AirData symbol="SO2" name="Sulfur dioxide" value={so2} />
          <AirData symbol="NO2" name="Nitrogen dioxide" value={no2} />
          <AirData symbol="PM10" name="" value={pm10} />
          <AirData symbol="PM2.5" name="" value={pm2_5} />
        </ul>
      </div>
    </div>
  );
}

export function SunriseSunsetCard({
  sunrise,
  sunset,
}: {
  sunrise?: number;
  sunset?: number;
}) {
  const { weatherData } = useWeatherContext();
  const Dates = (date?: number) => {
    if (date === undefined) {
      return "";
    }
    const timeStampDate = new Date(date * 1000);
    let hours = timeStampDate.getHours(),
      minutes = ("0" + timeStampDate.getMinutes()).slice(-2);

    const am_pm = hours >= 12 ? "p.m" : "a.m";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const finalDate = hours + ":" + minutes + " " + am_pm;

    return finalDate;
  };

  return (
    <div className="bg-[#1b1b1b] py-3 px-4 grid gap-6 rounded-md">
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
      <div className="flex items-center justify-between bg-[#1b1b1b] py-2 px-4 rounded-md h-max w-full gap-12">
        <div className="flex gap-2 items-center">
          {image}
          <h1 className="text-neutral-400 text-sm self-center">{tittle}</h1>
        </div>
        <span className="text-sm font-medium">{info}</span>
        {temp}
      </div>
    </div>
  );
}
