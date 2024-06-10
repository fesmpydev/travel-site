import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./redux/hook";
import { setLogin, setLogout } from "./redux/features/auth";
import { User } from "./types";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { themeColor } = useAppSelector((state) => state.appConfig);
  const user: User = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useAppDispatch();
  const pathname = window.location.pathname;

  useEffect(() => {
    if (!user.active) {
      if (pathname === "/profile") {
        window.location.replace("/login");
        return;
      }
    } else {
      if (pathname === "/login") {
        window.location.replace("/");
        return;
      }
    }
  }, [user.active, pathname]);

  useEffect(() => {
    if (user.active) {
      dispatch(setLogin(user));
    } else {
      dispatch(setLogout());
    }

    // eslint-disable-next-line
  }, [user.active]);

  return (
    <main
      className={
        themeColor === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      {children}
    </main>
  );
}
