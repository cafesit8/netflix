import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../../styles/Private/home.css'
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import { SwiperContent } from "./SwiperContent";

export function SwiperApp({img1, img2, img3, img4, img5, img6}) {
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
            425:{
                slidesPerView: 3
            },
            1000: {
                slidesPerView: 4
            },
            1200:{
                slidesPerView: 5
            },
            1500:{
                slidesPerView: 6
            }
        }}
      >
        <SwiperSlide className="slide"><SwiperContent img={img1} /></SwiperSlide>
        <SwiperSlide className="slide"><SwiperContent img={img2} /></SwiperSlide>
        <SwiperSlide className="slide"><SwiperContent img={img3} /></SwiperSlide>
        <SwiperSlide className="slide"><SwiperContent img={img4} /></SwiperSlide>
        <SwiperSlide className="slide"><SwiperContent img={img5} /></SwiperSlide>
        <SwiperSlide className="slide"><SwiperContent img={img6} /></SwiperSlide>
      </Swiper>
  );
}