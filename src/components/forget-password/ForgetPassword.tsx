import useForgetPassword from "../../hooks/useForgetPassword";
import { useAppSelector } from "../../redux/hook";
import ButtonBack from "../../shared/ButtonBack";

export default function ForgetPassword() {
  const { form, handleChangeForm, handleSubmitForm } = useForgetPassword();
  const { themeColor } = useAppSelector((state) => state.appConfig);

  return (
    <section className="w-full h-screen grid items-center p-5 lg:max-w-[500px] lg:m-auto">
      <ButtonBack />
      <form
        onSubmit={handleSubmitForm}
        className="w-[90%] m-auto flex flex-col items-center gap-2"
      >
        <h2 className="text-3xl font-bold text-center capitalize">
          forget password
        </h2>
        <input
          type="text"
          name="user"
          placeholder="Enter email or username"
          value={form.user}
          required
          className={`w-full p-3 outline-none text-lg font-normal rounded-xl ${
            themeColor === "dark"
              ? "text-white border-gray-200 border-2"
              : "text-black border-gray-200 border-2"
          }`}
          onChange={handleChangeForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter new password"
          value={form.password}
          required
          className={`w-full p-3 outline-none text-lg font-normal rounded-xl ${
            themeColor === "dark"
              ? "text-white border-gray-200 border-2"
              : "text-black border-gray-200 border-2"
          }`}
          onChange={handleChangeForm}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-2xl h-12"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
