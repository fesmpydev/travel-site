import { Link } from "react-router-dom";
import { footerLinks } from "../../constants/footer-links";
import { useAppSelector } from "../../redux/hook";

export default function Footer() {
  const { themeColor } = useAppSelector((state) => state.appConfig);
  return (
    <footer
      className={`w-full h-full ${
        themeColor === "dark" ? "bg-black" : "bg-gray-100"
      } mt-20 pb-4`}
      id="about"
    >
      <ul className="mt-4 pt-4 flex items-center gap-3 flex-wrap justify-center">
        {footerLinks.map((footerLink) => (
          <li key={footerLink.title}>
            <Link to={footerLink.link}>{footerLink.title}</Link>
          </li>
        ))}
      </ul>

      <article className="flex items-center justify-center gap-3 mt-5">
        <img
          src={"/svg/twitter.svg"}
          alt="Logo Twitter"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <img
          src={"/svg/instagram.svg"}
          alt="Logo Instagram"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </article>
    </footer>
  );
}
