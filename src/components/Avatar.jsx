import { Link } from "react-router-dom";
import img2 from '../img/avatarNetflix.png'

export default function Avatar({photo}) {
  return (
    <Link to='/netflix/changeUser'>
        <div className="flex flex-col items-center justify-between w-full h-[76px] overflow-hidden">
          <img className="rounded-full w-12" alt="foto de perfil" fetchpriorty="high" src={photo.photo || img2}></img>
          <p className="font-medium">{photo.userName || "Usuario"}</p>
        </div>
    </Link>
  );
}
