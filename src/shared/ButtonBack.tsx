import { useNavigate } from "react-router-dom";

export default function ButtonBack() {
  const navigate = useNavigate();

  return (
    <img
      src="/svg/back.svg"
      alt="Icon back"
      width={24}
      height={24}
      onClick={() => navigate(-1)}
      className="cursor-pointer absolute top-5 left-5 lg:left-1/3"
    />
  );
}
