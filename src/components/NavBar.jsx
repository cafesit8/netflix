import { IoLogOut } from "react-icons/io5";
import logo from '../img/icons8-netflix-144.svg'
import Avatar from "./Avatar";
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from 'react-router-dom'


export default function() {
  const {logOut, photo} = useContext(Context)

  return (
    <nav className='z-20 w-full flex justify-between items-center px-[5%] fixed h-[80px]'>
      <img alt="logo Netflix" fetchpriority="high" src={logo} className="max-[650px]:w-[100px] max-[360px]:w-[80px]" />
      <ul className="list flex items-center gap-20 max-[800px]:gap-4">
        <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer">
          <Link to='/home'>Inicio</Link>
        </li>
        <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer">
          Películas
        </li>
        <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer">
          Series
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Avatar photo={photo} />
        <div onClick={logOut} className="flex flex-col">
          <IoLogOut className="text-[50px] m-auto cursor-pointer" />
          <span className="text-center font-medium">Salir</span>
        </div>
      </div>
    </nav>
  );
}
