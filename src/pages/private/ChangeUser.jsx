import { useContext } from "react";
import img2 from "../../img/avatarNetflix.png";
import addUser from "../../img/addUser.png";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import Avatar from "../../components/ChangeUser/Avatar";

export default function ChangeUser() {
  const { userList, setPhoto, user, refUserName } = useContext(Context);

  return (
    <section className="bg-[#0c0c0c] text-white w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-[30px] mb-5 text-center">
        ¿Quién está viendo ahora?
      </h2>
      <article className="w-full max-[930px]:w-[90%] flex justify-center gap-10 max-[745px]:flex-wrap">
        <Link to="/home">
          <div
            onClick={() =>
              setPhoto({
                userName: user.displayName || refUserName.current,
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
            <p className="text-center mt-3">{user.displayName || refUserName.current || 'usuario'}</p>
          </div>
        </Link>
        {userList.map((user) => (
          <Avatar key={user.id} user={user}/>
        ))}
        {userList.length <= 3 && (
          <Link to="/createUser">
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
