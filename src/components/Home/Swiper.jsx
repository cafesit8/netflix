import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/Private/home.css";
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import { SwiperContent } from "./SwiperContent";

export default function ({ values }) {
  return (
    <Swiper
      grabCursor={true}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        425: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 6,
        },
      }}
    >
      {values.map(value => (
        <SwiperSlide key={value.title} className="slide">
          <SwiperContent values={values} img={value} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
