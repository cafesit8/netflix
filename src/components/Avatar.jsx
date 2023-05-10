import { Link } from "react-router-dom";

export default function Avatar({photo}) {
  return (
    <Link to='/netflix/changeUser'>
        <div className="flex flex-col items-center">
          <img className="rounded-full w-12" src={photo.photo || img2}></img>
          <p className="font-medium">{photo.userName || "Usuario"}</p>
        </div>
    </Link>
  );
}
