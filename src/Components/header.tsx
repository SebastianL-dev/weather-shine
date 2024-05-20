import { poppins } from "@/styles/fonts";
import { NavButtons } from "./buttons";
import SearchBar from "./search";

export default function GlobalHeader() {
  return (
    <header className="flex fixed w-full z-10">
      <div className="flex text-white p-4 mx-auto w-full items-center justify-around">
        <h1 className=" text-3xl">WeatherShine</h1>
        <nav className=" h-min">
          <ul
            className={`flex gap-2 ${poppins.className} antialiased text-sm text-neutral-400 font-medium max-lg:hidden`}
          >
            <NavButtons text="Home" />
            <NavButtons text="Home" />
            <NavButtons text="Home" />
            <NavButtons text="Home" />
          </ul>
        </nav>
        <div className="">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
