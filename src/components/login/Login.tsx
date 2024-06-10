import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useAppSelector } from "../../redux/hook";
import ChangeThemeColor from "../../shared/ChangeThemeColor";

export default function Login() {
  const { form, handleChangeForm, handleSubmitForm } = useLogin();
  const { themeColor } = useAppSelector((state) => state.appConfig);

  return (
    <section className="w-full h-screen p-5 grid items-center relative lg:max-w-[500px] lg:m-auto">
      <div className="absolute top-5 right-5">
        <ChangeThemeColor />
      </div>
      <form
        className="w-[90%] m-auto flex flex-col gap-5"
        onSubmit={handleSubmitForm}
      >
        <h2 className="text-3xl font-bold text-center">Welcome</h2>
        <input
          type="text"
          placeholder="Enter email or username"
          name="user"
          value={form.user}
          onChange={handleChangeForm}
          required
          className={`w-full p-3 outline-none text-lg font-normal rounded-xl ${
            themeColor === "dark"
              ? "text-white border-gray-200 border-2"
              : "text-black border-gray-200 border-2"
          }`}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={form.password}
          onChange={handleChangeForm}
          required
          className={`w-full p-3 outline-none text-lg font-normal rounded-xl ${
            themeColor === "dark"
              ? "text-white border-gray-200 border-2"
              : "text-black border-gray-200 border-2"
          }`}
        />
        <Link to="/forget-password" className="text-blue-500 text-right">
          Forget Password ?
        </Link>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-2xl h-12"
        >
          Login
        </button>
        <div className="flex items-center justify-center gap-2">
          <p>Don't have an account ?</p>
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
}
