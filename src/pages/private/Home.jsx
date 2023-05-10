import { Suspense, lazy, useEffect, useState } from 'react'
import { Loading } from '../public/Loading'
import { Btn } from '../../components/Btn'
import NavBar from '../../components/NavBar'
import img1 from '../../img/homeStrangerThings.webp'
import '../../styles/Private/home.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
const SwiperContentTotal = lazy(() => import('../../components/Home/SwiperContentTotal'))


export function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const dataHomePage = JSON.parse(localStorage.getItem('homePage'))
    if(dataHomePage !== null){
      setImages(dataHomePage)
    }else{
      const queryCollection = collection(db, "homePage");
      getDocs(queryCollection).then((res) => {
        const results = res.docs.map((item) => ({ id: item.id, ...item.data() }));
        setImages(results)
        localStorage.setItem('homePage', JSON.stringify(results))
      })
    }
  }, [])

  return (
    <>
      <section className='home-section1 w-full h-screen relative flex flex-col bg-black text-white'>
        <NavBar />
        <div className='absolute degradate w-full h-screen flex items-center z-10'>
            <article className='w-[70%] ml-[5%] max-[500px]:w-full max-[500px]:ml-0 max-[500px]:p-4 z-30'>
                <div className=''>
                  <span className='text-[25px] text-white font-normal max-[500px]:text-[20px]'>THRILLER | HORROR | TEEN PROGRAM</span>
                  <h1 className='text-[60px] text-white font-bold m-0 p-0 max-[500px]:text-[35px]'>Stranger Things</h1>
                  <h2 className='text-white font-medium max-[500px]:text-[15px]'>2019 | DIRECTOR: <span className='text-gray-400'>The Duffer Brothers</span> | TEMPORADAS: <span className='text-gray-400'>3 (25 Episodios)</span></h2>
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
          <img fetchpriority='hight' className='object-cover w-full h-full' alt='imagen de fondo' src={img1} />
        </picture>
      </section>
      <section className='w-full py-32 bg-black text-white max-[500px]:py-5 flex flex-col gap-14'>
          <Suspense fallback={<Loading />}>
            <SwiperContentTotal images={images} />
            <SwiperContentTotal images={images} />
            <SwiperContentTotal images={images} />
            <SwiperContentTotal images={images} />
          </Suspense>
      </section>
      <footer className='w-full text-white grid place-content-center bg-black py-7'>
            <div>
              <p>Derechos <span className='font-bold'>@Cafecito</span></p>
              <p className='text-center'>2023</p>
            </div>
      </footer>
    </>
  )
}
