import { IoLogOut, IoCloseSharp } from "react-icons/io5";
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../img/icons8-netflix-144.svg'
import Avatar from "./Avatar";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import { Link } from 'react-router-dom'
import img2 from '../img/avatarNetflix.png'


export default function() {
  const {logOut, photo} = useContext(Context)
  const refUl = useRef()

  function handleClick(){
    if(refUl.current.classList.contains('active')){
      refUl.current.classList.remove('active')
      return (<GiHamburgerMenu  className="min-[600px]:hidden text-2xl z-30" />)
    }else{
      refUl.current.classList.add('active') 
      return (<IoCloseSharp  className="min-[600px]:hidden text-3xl z-30" />)
    }
  }

  return (
    <nav className='z-20 w-full flex justify-between items-center px-[5%] top-0 fixed h-[85px] text-white max-[600px]:h-[55px]'>
      <img alt="logo Netflix" fetchpriority="high" src={logo} className="max-[650px]:w-[100px] max-[360px]:w-[80px] z-30" />
      <ul ref={refUl} className="list flex items-center gap-20 max-[800px]:gap-4">
        <Link to='/changeUser' className="min-[600px]:hidden flex items-center justify-between gap-3">
          <span className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer max-[600px]:text-[18px]">Crear o cambiar de usuario</span>
          <img className="rounded-full w-10 h-10 mr-3" alt="foto de perfil" fetchpriorty="high" src={photo.photo || img2}></img>
        </Link>
        <Link to='/home'>
          <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer max-[600px]:text-[18px]">
            Inicio
          </li>
        </Link>
        <Link>
          <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer max-[600px]:text-[18px]">
            Películas
          </li>
        </Link>
        <Link>
          <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer max-[600px]:text-[18px]">
            Series
          </li>
        </Link>
        <Link className="min-[600px]:hidden">
          <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer max-[600px]:text-[18px]">
            Anime
          </li>
        </Link>
        <Link className="min-[600px]:hidden">
          <li className="text-[20px] font-bold max-[600px]:font-normal cursor-pointer max-[600px]:text-[18px]">
            Buscar
          </li>
        </Link>
      </ul>
      <div className="flex items-center gap-5 max-[600px]:hidden">
        <Avatar photo={photo} />
        <div onClick={logOut} className="flex flex-col max-[600px]:w-[50px]">
          <IoLogOut className="text-[50px] m-auto cursor-pointer" />
          <span className="text-center font-medium">Salir</span>
        </div>
      </div>
      <div onClick={handleClick} className="hamburguer z-20 flex items-center cursor-pointer">
        <GiHamburgerMenu className="min-[600px]:hidden text-2xl z-30" />
      </div>
    </nav>
  );
}
