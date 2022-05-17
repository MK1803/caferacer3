import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Keyboard, Scrollbar } from "swiper";

import caferacerride2 from '../assets/img/caferacerride2.jpg'
import caferacerride3 from '../assets/img/caferacerride3.jpg'
import caferacerride4 from '../assets/img/caferacerride4.jpg'

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
      <h1 className="aboutProds">About products</h1>
      <div className="infoContent">
        <div className="homeInfo">
          <div className="infoImg" data-aos="fade-right" data-aos-duration="2000">
            <img src={caferacerride2} alt="" />
          </div>
          <div className="infoText">
            <h1>İkitəkərli özü hərəkət edən avtomobillər XIX əsrin 60-cı illərində yaranmağa başladı.</h1>
            <p>

            İkitəkərli özü hərəkət edən avtomobillər XIX əsrin 60-cı illərində yaranmağa başladı. Həmin vaxtda yeganə əlverişli güc qurğusu - buxar maşını idi - artıq ikitəkərli heyət üçün kompakt quraşdırılması kifayət qədər asan ola bilərdi. Lakin kiçik güclü həcm (Kouplend motosikletinin (1884) buxar mühərriki cəmi 9 kq, 0,25 at gücündə güclənmişdir), buxarın uzun müddətli yaranmasının təcrübəsizliyi üzündən və çox kiçik faydalı hərəkət əmsalı (faizlər vahidi) yalnız tək-tək sınaq nümunələrinin yaranmasını şərtləndirmişdir. Onlar üçün xidmət edən baza bütünlüklə metaldan və ya taxta elementlərdən ibarət primitiv velosipedlərdir, birbaşa olaraq qabaq təkərə bağlı olan pedal ötürücüsü ağır və rahat deyildi.</p>
          </div>
        </div>
      </div>
      <div className="infoContent">
        <div className="homeInfo">
          <div className="infoText">
            <h1>Daxili yanma mühərrikli ilk motosiklet.</h1>
            <p>Daxili yanma mühərrikli ilk motosiklet  (Daimler Reitwagen) Almaniyada 1885-ci ildə alman mühəndisləri Qotlib Daymler və Vilhelm Maybax tərəfindən hazırlanmışdır, sonradan məşhur avtomobil markalarının "ataları" olublar. Maşın yalnız gələcək dörd təkərli mühərrikli vasitənin ixtiraçıları üçün sadə bir test kürsüsü kimi yaradılmışdır və XIX əsrin əvvəllərindəki "kostryas" (əzələ güc ötürücülü) ilk pedalsız velosipedləri xatırladırdı. Daymler və Maybaxın benzin karbürator mühərriki 1,5 at gücündə idi və taxta təkərli taxta çərçivəyə quraşdırılmışdır.
            </p>
          </div>
          <div className="infoImg infoImgOrder" data-aos="fade-left" data-aos-duration="2000">
            <img src={caferacerride3} alt="" />
          </div>

        </div>
      </div>
      <div className="infoContent">
        <div className="homeInfo">
          <div className="infoImg" data-aos="fade-right" data-aos-duration="2000">
            <img src={caferacerride4} alt="" />
          </div>
          <div className="infoText">
            <h1>Sınaq vaxtı aparat 12 km/s sürətə qalxdı.</h1>
            <p> Sınaq vaxtı aparat 12 km/s sürətə qalxdı. Həmin 1885-ci ildə Daymler "kerosin mühərrikli üst gedişli daşıyıcı" patentini əldə etmişdir. Beləliklə, klassik motosiklet xarici yanma mühərrikli (XYM) (1886) klassik avtomobildən əvvəl yarandı. Daymler  firması motosikletlərin daha da konstruktivliyinə heç vaxt qayıtmadı. 1904-cü ildətarixi motosiklet Daymlerin emalatxanasında yanğın zamanı yanıb. Amma 1985-ci ildə motosikletin yüzilliyinə həsr olunmuş şouda və muzeylərdə nümayiş etdirmək üçün onlarla hərəkət edən replikalar hazırlanmışdır. Ştutqartdakı Daimler-Benz konserninin muzeyində də replika çıxarılıb.</p>
          </div>
        </div>
      </div>
      <div className="homeSlider">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src={homeSlide1} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={caferacerride2} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={caferacerride3} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={caferacerride4} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={homeSlide1} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={caferacerride2} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={caferacerride3} alt="" className="homeSlideImg" /></SwiperSlide>
          <SwiperSlide><img src={caferacerride4} alt="" className="homeSlideImg" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Home