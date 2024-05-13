export function MiniCardSkeleton() {
  return (
    <div className="flex gap-4 self-start w-full">
      <div className="flex items-center justify-between bg-blue-400 bg-opacity-5 border-[1px] border-blue-900 border-opacity-30 py-2 px-4 rounded-md h-max w-full gap-12">
        <div className="flex gap-2 items-center">
          Hola
          <h1 className="text-blue-200 text-opacity-55 text-sm self-center">
            Hola
          </h1>
        </div>
        <span className="text-sm font-medium text-white opacity-90">Hola</span>
        Hola
      </div>
    </div>
  );
}
