import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
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
      <SwiperSlide className="slide">
        <SwiperContent img={values[0]} />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <SwiperContent img={values[1]} />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <SwiperContent img={values[2]} />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <SwiperContent img={values[3]} />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <SwiperContent img={values[4]} />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <SwiperContent img={values[5]} />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <SwiperContent img={values[6]} />
      </SwiperSlide>
    </Swiper>
  );
}
