export default function MiniCardSkeleton() {
  return (
    <div className="flex gap-4 self-start min-w-[228.69px]">
      <div className="flex items-center justify-between bg-blue-400 bg-opacity-5 border-[1px] border-blue-900 border-opacity-30 py-2 px-4 rounded-md h-max w-full gap-12">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-5 w-5 rounded animate-pulse"></div>
          <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-4 py-0.5 w-12 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-blue-300 bg-opacity-15 text-sm self-center h-4 py-0.5 w-16 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
