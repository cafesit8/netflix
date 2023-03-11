import React from "react";
import {SwiperApp} from './Swiper'

//imagenes de portada
import Pimg1 from '../../img/carter.jpg'
import Pimg2 from '../../img/titanes.jpg'
import Pimg3 from '../../img/sinNovedad.jpg'
import Pimg4 from '../../img/pussInBook.jpg'
import Pimg5 from '../../img/casaFlores.png'
import Pimg6 from '../../img/12Horas.png'

export default function SwiperContentTotal() {
  return (
    <div className="w-[1500px] max-[1500px]:w-[92%] m-auto max-[420px]:mr-0">
      <h2 className="text-[25px] mb-5 max-[500px]:text-[20px]">
        Películas Populares
      </h2>
      <div className="flex w-full relative m-auto h-[350px] max-[850px]:h-[250px] max-[370px]:h-[230px]">
        <SwiperApp
          img1={Pimg1}
          img2={Pimg2}
          img3={Pimg3}
          img4={Pimg4}
          img5={Pimg5}
          img6={Pimg6}
        />
      </div>
    </div>
  );
}
