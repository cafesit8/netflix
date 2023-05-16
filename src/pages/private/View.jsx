import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import NavBar from "../../components/NavBar";
import { Btn } from "../../components/Btn";
import CardView from "../../components/CardView";
import Picture from "../../components/Picture";
import BtnAddList from "../../components/BtnAddList";
import { Loading } from "../public/Loading";
// import Recomendations from "../../components/view/Recomendations";
const Recomendations = lazy(() => import('../../components/view/Recomendations'))

export default function View() {
  const { images } = useContext(Context);
  const { title } = useParams();
  const [info, setInfo] = useState();
  const [show, setShow] = useState(false);
  const [recomendations, setRecomendations] = useState(null);

  useEffect(() => {
    const array = images.map((i) => Object.values(i)).flat();
    const found = array.find((item) => item.title === title);
    setInfo(found);
    found?.seasons && setShow(true);
    setRecomendations(Object.values(images[2]))
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full h-[80px] z-20 text-white">
        <NavBar />
      </header>
      <section className="w-full relative h-screen max-[600px]:h-auto bg-black text-white max-[600px]:flex max-[600px]:flex-col-reverse">
        <CardView>
          <div className="">
            <h1 className="text-[60px] text-white font-bold m-0 p-0 max-[600px]:text-[30px]">
              {info?.title}
            </h1>
            <h2 className="text-white font-medium max-[600px]:text-[15px]">
              Protagonistas:{" "}
              {info?.actors.map((actor) => (
                <span key={actor} className="text-gray-400">
                  {actor},{" "}
                </span>
              ))}
            </h2>
            {info?.seasons && (
              <h2 className="text-white font-medium max-[600px]:text-[15px]">
                Temporadas:{" "}
                <span className="text-gray-400">{info?.seasons}</span>
              </h2>
            )}
            {info?.time && (
              <h2 className="text-white font-medium max-[600px]:text-[15px]">
                Duración: <span className="text-gray-400">{info?.time}</span>
              </h2>
            )}
          </div>
          <div className="w-[90%] max-[900px]:w-full mt-5">
            <p className="text-white text-[17px] max-[600px]:text-[15px] mb-3">
              {info?.description}
            </p>
          </div>
          <div className="flex gap-4">
            <Btn text="Ver Ahora" />
            <BtnAddList text='Mi lista' />
          </div>
        </CardView>
        <Picture info={info} />
      </section>
      {show ? <span>Episodios aquí</span> :
      <Suspense fallback={<Loading />}>
        <Recomendations recomendations={recomendations} />
      </Suspense>}
    </>
  );
}
