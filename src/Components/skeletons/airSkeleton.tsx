export default function AirPollutionCardSkelleton() {
  return (
    <div className="bg-blue-500 bg-opacity-5 border-[1px] border-blue-900 border-opacity-30 grid gap-6 rounded-md w-max min-w-[417.33px] min-h-[248px]">
      <div className="flex justify-between items-center bg-blue-500 bg-opacity-10 py-2.5 px-4 rounded-t-md">
        <div className="flex gap-2 ">
          <div className="bg-blue-200 bg-opacity-15 text-sm self-center h-6 py-0.5 w-28 rounded-full animate-pulse"></div>
          <div className="bg-blue-200 bg-opacity-15 text-sm self-center h-5 w-5 rounded animate-pulse"></div>
        </div>
        <div className="bg-sky-500 bg-opacity-15 text-sm self-center h-[30px] w-16 rounded-full animate-pulse"></div>
      </div>
      <div>
        <ul className="grid items-center grid-cols-3 gap-x-4 gap-y-4 w-max content-center px-4 pb-3">
          <MiniAirCardSkeleton />
          <MiniAirCardSkeleton />
          <MiniAirCardSkeleton />
          <MiniAirCardSkeleton />
          <MiniAirCardSkeleton />
          <MiniAirCardSkeleton />
        </ul>
      </div>
    </div>
  );
}

export function MiniAirCardSkeleton() {
  return (
    <li className="flex flex-col gap-2 items-center min-w-[117.11px] min-h-[72px]">
      <div className="flex flex-col items-center gap-1">
        <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-4 py-0.5 w-8 rounded-full animate-pulse"></div>
        <div className="bg-blue-400 bg-opacity-15 text-sm self-center h-[14px] py-0.5 w-20 rounded-full animate-pulse"></div>
      </div>
      <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-7 py-0.5 w-16 rounded-full animate-pulse"></div>
    </li>
  );
}
