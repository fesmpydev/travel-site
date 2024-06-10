import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setThemeColor } from "../redux/features/appConfig";

export default function ChangeThemeColor() {
  const { themeColor } = useAppSelector((state) => state.appConfig);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeColor = localStorage.getItem("themeColor");
    if (themeColor) {
      dispatch(setThemeColor(themeColor as "dark" | "light"));
    }

    // eslint-disable-next-line
  }, []);

  const changeThemeColor = () => {
    if (themeColor === "dark") {
      dispatch(setThemeColor("light"));
      localStorage.setItem("themeColor", "light");
    } else {
      dispatch(setThemeColor("dark"));
      localStorage.setItem("themeColor", "dark");
    }
  };

  return (
    <img
      src={themeColor === "dark" ? "/svg/light.svg" : "/svg/dark.svg"}
      alt="Icon theme color"
      width={24}
      height={24}
      className={`cursor-pointer ${
        themeColor === "dark" ? "text-white" : "text-blue-500"
      }`}
      onClick={changeThemeColor}
    />
  );
}
