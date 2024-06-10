import { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { setLogin } from "../redux/features/auth";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [form, setForm] = useState({
    user: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmptyValue = Object.values(form).some((value) => !!value === false);
    if (isEmptyValue) {
      return;
    }

    try {
      const user = localStorage.getItem("user");

      if (!user) {
        alert("No existe usuario registrado");
        return;
      }

      const { name, email, password, image } = JSON.parse(user);

      const enteredUserIsEmail = form.user.includes("@");

      const userIsValid = enteredUserIsEmail
        ? form.user === email
        : form.user === name;

      if (!userIsValid) {
        alert("Usuario incorrecto");
        return;
      }

      if (form.password !== password) {
        alert("Contraseña incorrecta");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ ...JSON.parse(user), active: true })
      );

      dispatch(setLogin({ name, email, active: true, image }));

      setForm({
        user: "",
        password: "",
      });

      navigate("/profile");
    } catch (error) {
      console.log("Error submit login", error);
    }
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return { form, handleSubmitForm, handleChangeForm };
}
