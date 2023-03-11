import { Link } from 'react-router-dom'
import img1 from '../../img/homeStrangerThings.jpg'
import '../../styles/Private/home.css'
import logo from '../../img/icons8-netflix-144.svg'
import { Btn } from '../../components/Btn'
import {Avatar} from '../../components/Home/Avatar'
import {IoLogOut} from 'react-icons/io5'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import SwiperContentTotal from '../../components/Home/SwiperContentTotal'


export function Home() {
  const {logOut} = useContext(Context)
  return (
    <>
      <section className='home-section1 w-full h-screen relative flex flex-col bg-black text-white'>
        <nav className='z-20 w-full flex justify-between items-center px-[5%] fixed h-[100px]'>
          <img src={logo} className='max-[650px]:w-[100px] max-[360px]:w-[80px]' />
          <ul className='list flex items-center gap-20 max-[800px]:gap-4'>
            <li className='text-[20px] font-bold max-[600px]:font-normal cursor-pointer'>Incio</li>
            <li className='text-[20px] font-bold max-[600px]:font-normal cursor-pointer'>Películas</li>
            <li className='text-[20px] font-bold max-[600px]:font-normal cursor-pointer'>Series</li>
          </ul>
          <div className='flex items-center gap-5'>
              <Link to='/netflix/changeUser'>
                <Avatar />
              </Link>
              <div onClick={logOut} className='flex flex-col'>
                <IoLogOut className='text-[50px] m-auto' />
                <span className='text-center'>Salir</span>
              </div>
          </div>
        </nav>
        <div className='absolute degradate w-full h-screen flex items-center z-10'>
            <article className='w-[70%] ml-[5%] max-[500px]:w-full max-[500px]:ml-0 max-[500px]:p-4 z-30'>
                <div className=''>
                  <h6 className='text-[25px] text-white font-normal max-[500px]:text-[20px]'>THRILLER | HORROR | TEEN PROGRAM</h6>
                  <h1 className='text-[60px] text-white font-bold m-0 p-0 max-[500px]:text-[35px]'>Stranger Things</h1>
                  <h5 className='text-white font-medium max-[500px]:text-[15px]'>2019 | DIRECTOR: <span className='text-gray-400'>The Duffer Brothers</span> | TEMPORADAS: <span className='text-gray-400'>3 (25 Episodios)</span></h5>
                </div>
                <div className='w-[90%] max-[900px]:w-full mt-5'>
                  <p className='text-white text-[17px] max-[500px]:text-[15px]'>A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña. Ve todo lo que quieras.</p>
                </div>
                <div className='mt-5 flex gap-4 max-[320px]:flex-col'>
                  <Btn text='Ver Ahora' />
                  <button className='border py-1 px-3 rounded-md'>Todos los Episodios</button>
                </div>
            </article>
        </div>
        <picture className='picture w-[80%] self-end h-screen absolute top-0 right-0'>
          <img className='object-cover w-full h-full' src={img1} />
        </picture>
      </section>
      <section className='w-full py-32 bg-black text-white max-[500px]:py-5 flex flex-col gap-14'>
          <SwiperContentTotal />
          <SwiperContentTotal />
          <SwiperContentTotal />
      </section>
      <footer className='w-full text-white grid place-content-center bg-black py-7'>
            <div>
              <p>Derechos <span className='font-bold'>@Cafesito</span></p>
              <p className='text-center'>2023</p>
            </div>
      </footer>
    </>
  )
}
