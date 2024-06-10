import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { useAppSelector } from "../../redux/hook";
import ChangeThemeColor from "../../shared/ChangeThemeColor";

export default function Signup() {
  const { handleChangeForm, handleSubmitForm, form } = useSignup();
  const { themeColor } = useAppSelector((state) => state.appConfig);

  return (
    <section className="w-full h-screen p-4 grid items-center lg:max-w-[500px] lg:m-auto">
      <div className="absolute top-5 right-5">
        <ChangeThemeColor />
      </div>
      <form
        className="flex flex-col gap-4 mt-5 w-full"
        onSubmit={handleSubmitForm}
      >
        <div>
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="text-lg font-normal">Please enter your details</p>
        </div>
        <label htmlFor="name" className="text-gray-400">
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            placeholder="Name"
            required
            onChange={handleChangeForm}
            className={`w-full outline-none p-3 text-lg font-normal rounded-xl ${
              themeColor === "dark"
                ? "text-white border-gray-200 border-2"
                : "text-black border-gray-200 border-2"
            }`}
          />
        </label>
        <label htmlFor="email" className="text-gray-400">
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            required
            onChange={handleChangeForm}
            placeholder="Email"
            className={`w-full p-3 outline-none text-lg font-normal rounded-xl ${
              themeColor === "dark"
                ? "text-white border-gray-200 border-2"
                : "text-black border-gray-200 border-2"
            }`}
          />
        </label>
        <label htmlFor="password" className="text-gray-400">
          <input
            type="password"
            name="password"
            value={form.password}
            required
            onChange={handleChangeForm}
            id="password"
            placeholder="Password"
            className={`w-full p-3 outline-none text-lg font-normal rounded-xl ${
              themeColor === "dark"
                ? "text-white border-gray-200 border-2"
                : "text-black border-gray-200 border-2"
            }`}
          />
        </label>
        <div className="flex gap-2 justify-center items-center">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={form.agree === true ? true : false}
            required
            onChange={handleChangeForm}
          />
          <span>
            I agree with the{" "}
            <Link to="/terms" className="text-blue-400">
              terms and conditions
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-2xl h-12"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center font-normal">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Login
        </Link>
      </p>
    </section>
  );
}
