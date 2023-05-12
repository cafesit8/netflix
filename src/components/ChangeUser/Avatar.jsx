import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

export default function Avatar({ user }) {
  const { setPhoto, userList, setUserList } = useContext(Context);
  const navigate = useNavigate()

  function handleDelete() {
    const newList = userList.filter((item) => item.id !== user.id);
    setUserList(newList);
  }

  const editProfile = () => navigate(`/createUser/${user.id}`)

  return (
    <div key={user.photo} className="relative">
      <MdModeEdit onClick={editProfile} className="absolute right-7 -top-4 w-[35px] h-[35px] text-white/50 hover:text-white duration-150 z-10 cursor-pointer" />
      <AiFillDelete
        onClick={handleDelete}
        className="absolute -right-4 -top-4 w-[35px] h-[35px] text-white/50 hover:text-white duration-150 z-10 cursor-pointer"
      />
      <Link to="/home">
        <div
          onClick={() => setPhoto(user)}
          className="w-[150px] cursor-pointer h-full max-[930px]:w-[100px] relative"
        >
          <img className="w-full" alt={user.photo} src={user.photo} />
          <p className="text-center mt-3">{user.userName}</p>
        </div>
      </Link>
    </div>
  );
}
