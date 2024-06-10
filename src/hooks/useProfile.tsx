import { useState, useRef } from "react";
import { useAppDispatch } from "../redux/hook";
import { setLogin } from "../redux/features/auth";

export default function useProfile() {
  const [photoProfile, setPhotoProfile] = useState("");
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleChangePhotoProfile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setPhotoProfile(base64Image as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClickInputFile = () => {
    inputFileRef.current?.click();
  };

  const savedPhotoProfile = () => {
    const user = localStorage.getItem("user");
    const userParsed = JSON.parse(user || "{}");

    if (Object.keys(userParsed).length < 1) {
      alert("No existe usuario registrado");
      return;
    }

    const updatedUser = { ...userParsed, image: photoProfile };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    dispatch(setLogin(updatedUser));
    setPhotoProfile("");
  };

  return {
    inputFileRef,
    photoProfile,
    handleChangePhotoProfile,
    handleClickInputFile,
    savedPhotoProfile,
  };
}
