import { CiTempHigh } from "react-icons/ci";
import { MiniCard } from "./cards";

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
        <span className="text-neutral-400 text-sm">{symbol}</span>
        <span className="text-neutral-500 text-xs">{`(${name})`}</span>
      </div>
      <span className=" text-xl">{value?.toFixed(1)}</span>
    </li>
  );
}

export function TempInfo({ temp, like }: { temp?: string; like?: string }) {
  return (
    <div className="flex text-neutral-200 flex-col h-full self-start gap-16 justify-between">
      <div className="flex w-max items-center text-neutral-200 self-start">
        <span className="text-6xl font-semibold">{temp}</span>
        <span className="text-4xl font-semibold self-start mt-2">°C</span>
        <CiTempHigh className="h-20 w-20" />
      </div>
      <MiniCard
        tittle="Feels like"
        image={<></>}
        info=""
        temp={
          <div className="flex w-max items-center self-center">
            <span className="font-semibold text-sm">{like}</span>
            <span className="font-semibold text-xs self-start">°C</span>
          </div>
        }
      />
    </div>
  );
}
