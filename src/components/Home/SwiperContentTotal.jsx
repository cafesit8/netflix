import {SwiperApp} from './Swiper'

export default function({images}) {
  return (
    <div className="w-[1500px] max-[1500px]:w-[92%] m-auto max-[420px]:mr-0">
      <h2 className="text-[25px] mb-5 max-[500px]:text-[20px]">
        Películas Populares
      </h2>
      <div className="flex w-full relative m-auto h-[350px] max-[850px]:h-[250px] max-[370px]:h-[230px]">
        <SwiperApp images={images}/>
      </div>
    </div>
  );
}
