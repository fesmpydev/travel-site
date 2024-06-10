import { useAppSelector } from "../redux/hook";

export default function SearchInput() {
  const { themeColor } = useAppSelector((state) => state.appConfig);
  return (
    <form className="w-[90%] h-full m-auto flex items-center justify-end rounded-3xl p-2 gap-2 bg-white shadow-lg lg:bg-transparent lg:hover:bg-white">
      <img src="/svg/search.svg" alt="Icon search" width={24} height={24} />
      <input
        type="text"
        placeholder="Search"
        className={`w-[55%] outline-none pr-2 focus:w-[90%] transition-width ease-in-out duration-700 bg-transparent ${
          themeColor === "dark" ? "text-white focus:text-black" : "text-black"
        }`}
      />
    </form>
  );
}
