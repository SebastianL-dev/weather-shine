export default function ChartSkeleton() {
  return (
    <div className="border-[1px] border-blue-900 border-opacity-30 grid gap-6 rounded-md min-w-[268px] min-h-[284px] justify-center w-full p-4">
      <div className="flex gap-4 items-center flex-col w-full">
        <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-8 py-0.5 w-72 rounded-full animate-pulse"></div>
        <div className="bg-blue-400 bg-opacity-15 text-sm self-center h-6 py-0.5 w-28 rounded-full animate-pulse"></div>
      </div>
      <ul className="flex gap-4 w-min items-end">
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-28 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-12 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-16 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-24 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-8 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-32 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-16 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-12 animate-pulse"></li>
        <li className="w-10 bg-blue-100 bg-opacity-15 rounded-t-md h-24 animate-pulse"></li>
      </ul>
      {/* <span class="sr-only">Loading...</span> */}
    </div>
  );
}
