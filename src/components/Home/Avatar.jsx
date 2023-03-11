import React, { useContext } from "react";
import { Context } from "../../context/Context";
import img2 from "../../img/avatarNetflix.png";

export function Avatar() {
  const { userSelected, user } = useContext(Context);
  if (userSelected === undefined) {
    return (
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-12"
          src={user.reloadUserInfo.photoURL || img2}
        />
        <p className="font-medium">{user.displayName || "Usuario"}</p>
      </div>
    );
  }
  if (userSelected.color === undefined) {
    return (
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-12"
          src={user.reloadUserInfo.photoURL || img2}
        />
        <p className="font-medium">{user.displayName || "Usuario"}</p>
      </div>
    );
  }
  if (userSelected.color === "/src/img/avatarNetflixAzul.jpg") {
    return (
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-12 font-medium"
          src={userSelected.color}
        />
        <p>{userSelected.userName}</p>
      </div>
    );
  }
  if (userSelected.color === "/src/img/avatarNetflixAmarillo.jpg") {
    return (
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-12 font-medium"
          src={userSelected.color}
        />
        <p>{userSelected.userName}</p>
      </div>
    );
  }
  if (userSelected.color === "/src/img/avatarNetflixVerde.jpg") {
    return (
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-12 font-medium"
          src={userSelected.color}
        />
        <p>{userSelected.userName}</p>
      </div>
    );
  }
}
