import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import NavBar from "../../components/NavBar";
import { Btn } from "../../components/Btn";

export default function View() {
  const { images } = useContext(Context);
  const { title } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const array = images.map((i) => Object.values(i)).flat();
    const found = array.find((item) => item.title === title);
    setInfo(found);
  }, []);

  return (
    <>
        <header className="fixed top-0 w-full h-[80px] z-20 text-white">
            <NavBar />
        </header>
        <section className="w-full relative h-screen max-[600px]:h-auto bg-black text-white max-[600px]:flex max-[600px]:flex-col-reverse">
            <div className="absolute degradate w-full h-screen flex items-center z-10 max-[600px]:relative max-[600px]:h-auto">
                <article className="w-[70%] ml-[5%] max-[500px]:w-full max-[500px]:ml-0 max-[500px]:p-4 z-30 ">
                    <div className="">
                        <h1 className="text-[60px] text-white font-bold m-0 p-0 max-[600px]:text-[30px]">
                        {info?.title}
                        </h1>
                        <h2 className="text-white font-medium max-[600px]:text-[15px]">
                        Protagonistas:{" "}
                        {info?.actors.map((actor) => (
                            <span className="text-gray-400">{actor}, </span> 
                        ))}
                        </h2>
                        {info?.seasons && <h2 className="text-white font-medium max-[600px]:text-[15px]">
                            Temporadas:{" "}
                        <span className="text-gray-400">{info?.seasons}</span>
                        </h2>}
                        {info?.time && <h2 className="text-white font-medium max-[600px]:text-[15px]">
                            Duración:{" "}
                        <span className="text-gray-400">{info?.time}</span>
                        </h2>}
                    </div>
                    <div className="w-[90%] max-[900px]:w-full mt-5">
                        <p className="text-white text-[17px] max-[600px]:text-[15px] mb-3">
                        {info?.description}
                        </p>
                    </div>
                    <Btn text='Ver Ahora' />
                </article>
            </div>
          <picture className="w-[85%] self-end h-full absolute top-0 right-0 max-[600px]:w-full max-[600px]:h-[230px] max-[600px]:m-auto max-[600px]:relative max-[600px]:z-10 max-[600px]:mt-16">
              <source media="(max-width: 600px)" srcSet={info?.imageSmall} />
              <source media="(min-width: 601px)" srcSet={info?.imageBg} />
              <img className="object-cover w-full h-full max-[600px]:z-10" fetchpriority="hight" src alt={info?.title} arial-hidden='true' />
            </picture>
        </section>
    </>
  );
}
