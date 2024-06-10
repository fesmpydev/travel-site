import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Signup from "./components/signup/Signup.tsx";
import Profile from "./components/profile/Profile.tsx";
import Login from "./components/login/Login.tsx";
import ForgetPassword from "./components/forget-password/ForgetPassword.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} fallbackElement />
      </Layout>
    </Provider>
  </React.StrictMode>
);
