import useLogout from "../hooks/useLogout";

export default function ButtonLogout() {
  const { handleLogout } = useLogout();
  return (
    <button
      onClick={handleLogout}
      className=" text-red-500 font-medium text-xl"
    >
      Logout
    </button>
  );
}
