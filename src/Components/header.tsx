import { poppins } from "@/styles/fonts";
import { NavButtons } from "./buttons";

export default function GlobalHeader() {
  return (
    <header className="">
      <div className="flex gap-20 text-white p-4 mx-28 w-calc(100% - margin) items-center">
        <h1 className=" text-3xl">WeatherShine</h1>
        <nav className=" h-min">
          <ul
            className={`flex gap-2 ${poppins.className} antialiased text-sm text-neutral-400 font-semibold`}
          >
            <NavButtons text="Home" />
            <NavButtons text="Home" />
            <NavButtons text="Home" />
            <NavButtons text="Home" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
