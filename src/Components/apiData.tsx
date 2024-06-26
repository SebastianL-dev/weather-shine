import { CiTempHigh } from "react-icons/ci";
import { MiniCard } from "./cards";
import TempSkeleton from "./skeletons/tempSkeleton";

export function AirData({
  symbol,
  name,
  value,
}: {
  symbol: string;
  name: string;
  value?: number;
}) {
  return (
    <li className="flex flex-col gap-2 items-center">
      <div className="flex flex-col items-center">
        <span className="text-blue-200 text-opacity-70 text-sm">{symbol}</span>
        <span className="text-blue-300 text-opacity-40 text-xs">{`(${name})`}</span>
      </div>
      <span className=" text-xl">{value?.toFixed(1)}</span>
    </li>
  );
}

export function TempInfo({ temp, like }: { temp?: string; like?: number }) {
  return (
    <div className="flex text-white flex-col h-full self-start gap-16 justify-between">
      {temp == undefined || like == undefined ? (
        <TempSkeleton />
      ) : (
        <div className="flex w-full text-white justify-center">
          <span className="text-[52px] font-semibold self-center flex w-max">{`${temp}°C`}</span>
          {/* <CiTempHigh className="h-20 w-20" /> */}
        </div>
      )}
      <MiniCard units="°C" tittle="Feels like" image={<></>} info={like} />
    </div>
  );
}
