import ButtonLogout from "../../shared/ButtonLogout";
import ChangeThemeColor from "../../shared/ChangeThemeColor";
import { useAppSelector } from "../../redux/hook";
import useProfile from "../../hooks/useProfile";
import ButtonBack from "../../shared/ButtonBack";

export default function Profile() {
  const { name, email, image } = useAppSelector((state) => state.auth);
  const {
    handleChangePhotoProfile,
    handleClickInputFile,
    inputFileRef,
    photoProfile,
    savedPhotoProfile,
  } = useProfile();

  return (
    <section className="w-full min-h-screen p-5 relative">
      <article className="absolute top-5 right-5 lg:right-1/3">
        <ChangeThemeColor />
      </article>
      <ButtonBack />
      <h2 className="text-xl text-center capitalize font-normal text-blue-500">
        Profile
      </h2>
      <article className="flex flex-col items-center mt-10 gap-2">
        <figure className="relative">
          {photoProfile !== "" ? (
            <img
              src={photoProfile}
              alt="User photo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          ) : (
            <img
              src={image !== "" ? image : "/svg/user.svg"}
              alt="User image"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          )}
          <label htmlFor="upload">
            <input
              type="file"
              name="upload"
              id="upload"
              className="hidden"
              ref={inputFileRef}
              onChange={handleChangePhotoProfile}
            />
          </label>
          <img
            src="/svg/upload.svg"
            alt="Icon upload"
            width={24}
            height={24}
            onClick={handleClickInputFile}
            className="absolute top-0 right-[-15px] cursor-pointer"
          />
        </figure>
        {photoProfile && (
          <button
            type="button"
            onClick={savedPhotoProfile}
            className="bg-blue-500 text-white font-bold rounded-2xl text-sm w-[50%] h-9"
          >
            Update Photo
          </button>
        )}
        <h2 className="text-2xl capitalize font-bold text-center">{name}</h2>
        <p className="text-lg text-center font-normal">{email}</p>
      </article>
      <section className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ButtonLogout />
      </section>
    </section>
  );
}
