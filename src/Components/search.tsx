import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <form action="" className="flex items-center">
      <button className="px-2 py-2 bg-[#4a74ff] rounded-s-lg">
        <FaSearch />
      </button>
      <input
        type="text"
        className="bg-[#222] rounded-e-lg text-neutral-200 placeholder:text-neutral-500 text-sm font-medium px-4 py-2 placeholder:w-min outline-none "
        placeholder="Search your country..."
      />
    </form>
  );
}
