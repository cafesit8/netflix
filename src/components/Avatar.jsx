import { Link } from "react-router-dom";
import img2 from '../img/avatarNetflix.png'

export default function Avatar({photo}) {
  return (
    <Link to='/changeUser'>
        <div className="flex flex-col items-center justify-between mt-2 w-full max-w-[150px] h-full overflow-swiper-backface-hidden max-[600px]:w-[50px]">
          <img className="rounded-full w-12" alt="foto de perfil" fetchpriorty="high" src={photo.photo || img2}></img>
          <p className="font-medium text-sm text-center max-[600px]:text-[12px]">{photo.userName || "Usuario"}</p>
        </div>
    </Link>
  );
}
