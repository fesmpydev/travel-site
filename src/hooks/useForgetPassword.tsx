import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForgetPassword() {
  const [form, setForm] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmptyValue = Object.values(form).some((value) => !!value === false);
    if (isEmptyValue) {
      return;
    }

    const user = localStorage.getItem("user");

    if (!user) {
      alert("No existe usuario registrado");
      return;
    }

    const { name, email } = JSON.parse(user);

    const enteredUserIsEmail = form.user.includes("@");
    const userIsValid = enteredUserIsEmail
      ? form.user === email
      : form.user === name;

    if (!userIsValid) {
      alert("Usuario incorrecto");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ ...JSON.parse(user), password: form.password })
    );
    navigate("/login");
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return { form, handleChangeForm, handleSubmitForm };
}
