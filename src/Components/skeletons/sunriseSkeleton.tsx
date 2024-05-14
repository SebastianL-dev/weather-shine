export default function SunriseSunsetCardSkeleton() {
  return (
    <div className="bg-blue-500 bg-opacity-5 border-[1px] border-blue-900 border-opacity-30 grid gap-6 rounded-md min-w-[287.48px] min-h-[142px]">
      <div className="flex gap-2 bg-blue-500 bg-opacity-10 py-2.5 px-4 rounded-t-md">
        <div className="bg-blue-200 bg-opacity-15 text-sm self-center h-4 py-0.5 w-28 rounded-full animate-pulse"></div>
        <div className="bg-blue-200 bg-opacity-15 text-sm self-center h-5 w-5 rounded animate-pulse"></div>
      </div>
      <div>
        <ul className="flex justify-between gap-8 pb-3 px-4">
          <li className="flex text-sm gap-2 items-center">
            <div className="flex justify-between w-full flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-5 w-5 rounded animate-pulse"></div>
                <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-4 py-0.5 w-12 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-8 py-0.5 w-24 rounded-full animate-pulse"></div>
            </div>
          </li>
          <li className="flex text-sm gap-2 items-center">
            <div className="flex justify-between w-full flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-5 w-5 rounded animate-pulse"></div>
                <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-4 py-0.5 w-12 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-8 py-0.5 w-24 rounded-full animate-pulse"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
