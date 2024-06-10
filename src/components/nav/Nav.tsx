import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navs";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import ChangeThemeColor from "../../shared/ChangeThemeColor";
import SearchInput from "../../shared/SearchInput";

export default function Nav() {
  const { themeColor } = useAppSelector((state) => state.appConfig);
  const navigate = useNavigate();

  return (
    <nav
      className={`w-[90%] h-[10vh] m-auto flex justify-end items-center relative ${
        themeColor === "dark" ? "lg:bg-black" : "lg:bg-white"
      } lg:w-full lg:justify-around`}
    >
      <Link
        to="/"
        className={` hidden lg:block lg:text-base lg:font-bold ${
          themeColor === "dark" ? "lg:text-white" : "lg:text-[#CC2D4A]"
        }`}
      >
        World Travel
      </Link>
      <img
        src="/svg/menu-mobile.svg"
        alt="Mobile menu"
        width={24}
        height={24}
        className="cursor-pointer lg:hidden"
      />
      <ul className="absolute top-0 left-0 w-full h-full flex-col justify-start gap-3 hidden lg:flex lg:items-center lg:justify-center lg:flex-row text-[#CC2D4A] lg:font-bold lg:text-xl lg:gap-6 lg:relative lg:w-auto">
        {navLinks.map(({ title, link }) => (
          <li key={title}>
            <a
              href={link}
              className={`text-base ${
                themeColor === "dark" ? "lg:text-white" : "lg:text-[#CC2D4A]"
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>

      <article className="hidden lg:flex lg:items-center lg:justify-center lg:gap-5">
        <SearchInput />
        <ChangeThemeColor />
        <img
          src="/svg/user.svg"
          alt="Icon user"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => navigate("/profile")}
        />
      </article>
    </nav>
  );
}
