import { useContext } from "react";
import img2 from "../../img/avatarNetflix.png";
import addUser from "../../img/addUser.png";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function ChangeUser() {
  const { userList, setPhoto, user } = useContext(Context);

  return (
    <section className="bg-[#1b1b1b] text-white w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-[30px] mb-5 text-center">
        ¿Quién está viendo ahora?
      </h2>
      <article className="w-full max-[930px]:w-[90%] flex justify-center gap-10 max-[745px]:flex-wrap">
        <Link to="/netflix/home">
          <div
            onClick={() =>
              setPhoto({
                userName: user.displayName,
                photo: user.photoURL,
              })
            }
            className="w-[150px] cursor-pointer h-full max-[930px]:w-[100px]"
          >
            <img
              className="w-full"
              alt={user.photoURL || img2}
              src={user.photoURL || img2}
            ></img>
            <p className="text-center mt-3">{user.displayName || 'usuario'}</p>
          </div>
        </Link>
        {userList.map((user) => (
          <Link key={user.photo} to="/netflix/home">
            <div
              onClick={() => setPhoto(user)}
              className="w-[150px] cursor-pointer h-full max-[930px]:w-[100px]"
            >
              <img className="w-full" alt={user.photo} src={user.photo} />
              <p className="text-center mt-3">{user.userName}</p>
            </div>
          </Link>
        ))}
        {userList.length <= 3 && (
          <Link to="/netflix/createUser">
            <div className="w-[150px] grid place-content-center h-full max-[930px]:w-[100px]">
              <img
                className="w-full cursor-pointer"
                alt="boton de agregar usuario"
                src={addUser}
              />
            </div>
          </Link>
        )}
      </article>
    </section>
  );
}
