import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        alert("Hubo problemas para cerrar la sesión");
        return;
      }

      const userParsed = JSON.parse(user);
      const updatedUser = { ...userParsed, active: false };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogout };
}
