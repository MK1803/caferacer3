import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Keyboard, Scrollbar } from "swiper";



import homeSlide1 from "../assets/img/homeSlider/AC1_4182.jpg"
import homeSlide2 from "../assets/img/homeSlider/URj6d8.jpg"
import homeSlide3 from "../assets/img/homeSlider/nineTRacer.jpg"
import homeSlide4 from "../assets/img/homeSlider/store.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Home() {
  return (
    <>
      <div className="homeSlider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src={homeSlide1} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={homeSlide2} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={homeSlide3} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={homeSlide4} alt="" className="homeSlideImg" /></SwiperSlide>
        </Swiper>
      </div>
      
    </>
  )
}

export default Home