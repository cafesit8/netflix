import "../../styles/Public/welcome.css";
import logo from "../../img/icons8-netflix-144.svg";
import img1 from "../../img/netflixtv.png";
import img2 from "../../img/img2.png";
import { TfiWorld } from "react-icons/tfi";
import { Btn } from "../../components/Btn";
import { Link } from "react-router-dom";
import { Article } from "../../components/Welcome/Article";

export function Welcome() {
  return (
    <>
      <section className="section1 w-full h-screen text-white relative grid place-content-center">
        <nav className="flex w-full h-28 justify-between items-center px-[5%] z-20 fixed">
          <span>
            <img src={logo} />
          </span>
          <div className="flex item">
            <span className="logo-world text-white flex items-center px-4 gap-2 border-white border rounded-md mr-3">
              <TfiWorld />
              Español
            </span>
            <Link to="/login">
              <Btn className="cursor-pointer" text="Iniciar Sesión" />
            </Link>
          </div>
        </nav>
        <article className="relative z-10 text-center m-auto p-3 max-[600px]:w-[90%]">
          <h2 className="text-[40px] font-bold max-[600px]:text-[30px]">
            Películas y series ilimitadas y mucho más
          </h2>
          <h6 className="text-[20px] text-white max-[600px]:text-[15px]">
            Disfruta donde quieras. Cancela cuando quieras.
          </h6>
          <h5 className="text-[22px] text-white mb-5 max-[600px]:text-[17px]">
            ¿Quieres ver Netflix ya? Registrarte con nosotros y obtén tu
            membresía de Netflix
          </h5>
          <Link to="/register">
            <button className="bg-[#e50914] py-1 text-[20px] px-5 text-white rounded-lg">
              Registrate
            </button>
          </Link>
        </article>
        <div className="bg w-full h-screen absolute top-0 left-0"></div>
      </section>
      <section className="w-full py-32 bg-black grid place-content-center">
        <article className="z-10 relative text-white w-[1200px] flex items-center gap-3 max-[1200px]:w-[90%] m-auto max-[700px]:flex-col">
          <Article
            h2="Disfruta en tu TV"
            p="Ve en Smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray, tablet, lasptops y todos los dispositivos móviles."
            img={img1}
          />
        </article>
      </section>
      <section className="w-full py-32 bg-black grid place-content-center">
        <article className="z-10 relative text-white w-[1200px] flex flex-row-reverse items-center gap-3 max-[1200px]:w-[90%] m-auto max-[700px]:flex-col">
          <Article
            h2="Descarga tus series para verlas Ofline"
            p="Guarda tu contenido favorito y tendrás algo siempre para ver."
            img={img2}
          />
        </article>
      </section>
    </>
  );
}
