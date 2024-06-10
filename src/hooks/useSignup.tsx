import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmptyValue = Object.values(form).some((value) => !!value === false);

    if (isEmptyValue) {
      return;
    }

    try {
      const user = {
        ...form,
        name: form.name.toLowerCase(),
        email: form.email.toLowerCase(),
        active: true,
      };
      localStorage.setItem("user", JSON.stringify(user));

      setForm({
        name: "",
        email: "",
        password: "",
        agree: false,
      });

      navigate("/profile");
    } catch (error) {
      console.log("submitForm", error);
    }
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "agree") {
      event.target.checked
        ? setForm((prevForm) => ({ ...prevForm, [name]: true }))
        : setForm((prevForm) => ({ ...prevForm, [name]: false }));
      return;
    }

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return { handleSubmitForm, handleChangeForm, form };
}
