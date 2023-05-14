import { Suspense, lazy, useContext } from "react";
import { Loading } from "../public/Loading";
import { Btn } from "../../components/Btn";
import img1 from "../../img/homeStrangerThings.webp";
import { CardPresentation } from "../../components/CardPresentation";
import { Context } from "../../context/Context";
const SwiperContentTotal = lazy(() => import("../../components/Home/SwiperContentTotal"));
const Footer = lazy(() => import("../../components/Footer"));
const Nav = lazy(() => import('../../components/NavBar'))
import "../../styles/Private/home.css";

export function Home() {
  const { images } = useContext(Context)

  return (
    <>
      <section className="home-section1 w-full h-screen relative flex flex-col bg-black text-white">
        <Nav />
        <CardPresentation>
          <div className="">
            <span className="text-[25px] text-white font-normal max-[500px]:text-[20px]">
              THRILLER | HORROR | TEEN PROGRAM
            </span>
            <h1 className="text-[60px] text-white font-bold m-0 p-0 max-[500px]:text-[35px]">
              Stranger Things
            </h1>
            <h2 className="text-white font-medium max-[500px]:text-[15px]">
              2019 | DIRECTOR:{" "}
              <span className="text-gray-400">The Duffer Brothers</span> |
              TEMPORADAS:{" "}
              <span className="text-gray-400">3 (25 Episodios)</span>
            </h2>
          </div>
          <div className="w-[90%] max-[900px]:w-full mt-5">
            <p className="text-white text-[17px] max-[500px]:text-[15px]">
              A raíz de la desaparición de un niño, un pueblo desvela un
              misterio relacionado con experimentos secretos, fuerzas
              sobrenaturales aterradoras y una niña muy extraña. Ve todo lo que
              quieras.
            </p>
          </div>
          <div className="mt-5 flex gap-4 max-[320px]:flex-col">
            <Btn text="Ver Ahora" />
            <button className="border py-1 px-3 rounded-md">
              Todos los Episodios
            </button>
          </div>
        </CardPresentation>
        <picture className="picture w-[80%] self-end h-screen absolute top-0 right-0">
          <img
            fetchpriority="hight"
            className="object-cover w-full h-full"
            alt="imagen del home"
            src={img1}
          />
        </picture>
      </section>
      <section className="w-full py-28 bg-black text-white max-[500px]:py-5 flex flex-col gap-14">
        <Suspense fallback={<Loading />}>
          {images && (
            <>
              <SwiperContentTotal title='Películas Populares' images={images[1]} />
              <SwiperContentTotal title='Originales de Netflix' images={images[2]} />
              <SwiperContentTotal title='Para toda la familia' images={images[0]} />
            </>
          )}
        </Suspense>
      </section>
      <Footer />
    </>
  );
}
