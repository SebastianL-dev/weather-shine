import { CiTempHigh } from "react-icons/ci";
import { Separator1 } from "./separatos";
import { FaRegClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { MdPlace, MdSpeed } from "react-icons/md";
import { ReactElement } from "react";
import { RiWaterPercentLine } from "react-icons/ri";
import { TbCircuitGround } from "react-icons/tb";
import { LuWaves } from "react-icons/lu";

export function GeneralInfo() {
  return (
    <div className="flex text-white bg-[#222] w-max p-4 rounded-xl flex-col gap-8">
      <div className="flex gap-2 items-center">
        <MdPlace className="h-6 w-6 text-[#4a74ff]" />
        <h1 className="font-medium text-xl text-white">
          Sogamoso - Boyacá - Colombia
        </h1>
      </div>
      <div className="flex gap-8 h-max items-end">
        <TempInfo />
        <div className="grid gap-2 w-calc(100% + 20px) items-end">
          <MiniCard
            tittle="Pressure"
            image={<MdSpeed className="w-5 h-5 text-neutral-400" />}
            info="100 hPa"
            temp={<></>}
          />
          <MiniCard
            tittle="Humidity"
            image={<RiWaterPercentLine className="w-5 h-5 text-neutral-400" />}
            info="30%"
            temp={<></>}
          />
          <MiniCard
            tittle="Sea level"
            image={<LuWaves className="w-5 h-5 text-neutral-400" />}
            info="2300 mts"
            temp={<></>}
          />
          <MiniCard
            tittle="Ground level"
            image={<TbCircuitGround className="w-5 h-5 text-neutral-400" />}
            info="750 mts"
            temp={<></>}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-neutral-200">Date</span>
        <Separator1 />
        <div className="flex gap-2 items-center text-neutral-300">
          <FaRegClock />
          <span className="font-medium text-sm text-neutral-500">22:30pm</span>
        </div>
        <div className="flex gap-2 items-center text-neutral-300">
          <IoIosCalendar />
          <span className="font-medium text-sm text-neutral-500">
            Wednesday 2, Jun
          </span>
        </div>
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

export function TempInfo() {
  return (
    <div className="flex text-neutral-200 flex-col h-full self-start gap-16 ">
      <div className="flex w-max items-center text-neutral-200 self-start">
        <span className="text-6xl font-semibold">20</span>
        <span className="text-4xl font-semibold self-start mt-2">°C</span>
        <CiTempHigh className="h-20 w-20" />
      </div>
      <MiniCard
        tittle="Feels like"
        image={<></>}
        info=""
        temp={
          <div className="flex w-max items-center self-center">
            <span className="font-semibold text-sm">21</span>
            <span className="font-semibold text-xs self-start">°C</span>
          </div>
        }
      />
    </div>
  );
}