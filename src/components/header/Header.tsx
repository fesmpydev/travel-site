import Button from "../../shared/Button";
import SearchInput from "../../shared/SearchInput";

export default function Header() {
  return (
    <header className="w-full h-screen bg-[url('/img/bg-header-mobile.png')] lg:bg-[url('/img/bg-header-desktop.png')]  bg-no-repeat bg-cover">
      <section className="w-[90%] h-[8vh] m-auto max-w-[500px] lg:hidden">
        <SearchInput />
      </section>
      <h2 className="hidden lg:block lg:absolute top-[30%] left-[22%] -translate-x-1/2 text-black text-4xl font-bold">
        Find More Locations <br />
        like this
      </h2>
      <Button
        title="Explore More"
        trigger={() => {}}
        type="button"
        classname="absolute bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-12 bg-white rounded-3xl text-[#CC2D4A] font-medium active:translate-y-1 max-w-[300px] lg:top-[50%] lg:left-[20%]"
      />
    </header>
  );
}
