import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom'
import homeProd1 from "../assets/img/bombrider2.jpg"
import homeProd2 from "../assets/img/brown1.jpg"
import homeProd3 from "../assets/img/reax_reax215_jeans2.jpg"
import homeProd4 from "../assets/img/brown1.jpg"
import next from "../assets/img/next.svg"
import chain from "../assets/img/chainHome.jpg"
import oil from "../assets/img/oilHome.jpg"

import { MdOutlineDeliveryDining } from 'react-icons/md';

import { Autoplay, Pagination, Navigation, Keyboard, Scrollbar } from "swiper";

import homeSlide1 from "../assets/img/homeSlider/AC1_4182.jpg"
import homeSlide2 from "../assets/img/homeSlider/URj6d8.jpg"
import homeSlide3 from "../assets/img/homeSlider/nineTRacer.jpg"
import homeSlide4 from "../assets/img/homeSlider/store.jpg"
import caferacerride2 from '../assets/img/caferacerride2.jpg'
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
          <SwiperSlide>
            <div className="sliderContainer">
              <img src={homeSlide1} alt="" className="homeSlideImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide><div className="sliderContainer">
            <img src={homeSlide2} alt="" className="homeSlideImg" />

          </div></SwiperSlide>
          <SwiperSlide><div className="sliderContainer">
            <img src={homeSlide3} alt="" className="homeSlideImg" />

          </div></SwiperSlide>
          <SwiperSlide><div className="sliderContainer">
            <img src={homeSlide4} alt="" className="homeSlideImg" />
          </div></SwiperSlide>
        </Swiper>
      </div>
      <div className="container homeProdContainer">
        <div className="homeProductLeft">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}

            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd2} alt="" />
                <div className="homeProdText">
                  <h1>Dəri Bomber Gödəkçə</h1>
                  <p>Bu dəri bayker gödəkçəsi rahat, lakin dəbli təsadüfi geyimi təcəssüm etdirir.</p>
                  <Link to="/products/jackets">Məhsullara keçid</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd1} alt="" />
                <div className="homeProdText">
                  <h1>Dəri Bomber Gödəkçə</h1>
                  <p>Bu dəri bayker gödəkçəsi rahat, lakin dəbli təsadüfi geyimi təcəssüm etdirir.</p>
                  <Link to="/products/helmets">Məhsullara keçid</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd3} alt="" />
                <div className="homeProdText">
                  <h1>Dəri Bomber Gödəkçə</h1>
                  <p>Bu dəri bayker gödəkçəsi rahat, lakin dəbli təsadüfi geyimi təcəssüm etdirir.</p>
                  <Link to="/products/pants">Məhsullara keçid</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd4} alt="" />
                <div className="homeProdText">
                  <h1>Dəri Bomber Gödəkçə</h1>
                  <p>Bu dəri bayker gödəkçəsi rahat, lakin dəbli təsadüfi geyimi təcəssüm etdirir.</p>
                  <Link to="/products/shoes">Məhsullara keçid</Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="homeProductRight">
          <Link className="cta" to="contact">
            <span>Bizimlə əlaqə saxlayın!</span>
            <span>
              <img src={next} alt="" />
            </span>
          </Link>
        </div>
      </div>
      <div className="container homeCardContainer">
        <div className="homeCard">
          <img src={chain} alt="" />
          <h1>Hamısı zəncir üçün!</h1>
          <p>
            Bu bölmədə siz zəncirə baxımı və dəyişdirilməsi üçün hər şeyi tapa bilərsiniz!
          </p>

          <Link to="/products/chains" className="homeCardBtn">Məhsullara keçid</Link>
        </div>
        <div className="homeCard">
          <img src={oil} alt="" />
          <h1>Yağ dəyişməsi üçün hər şey!</h1>
          <p>
            Bu bölmədə yağlar, filtrlər və alətlərin böyük seçimi var!
          </p>
          <Link to="/products/oils" className="homeCardBtn">Məhsullara keçid</Link>
        </div>
      </div>
      <div className="infoContent mrInfo">
                <div className="homeInfo infoBg">
                    <div className="infoImg" data-aos="fade-right" data-aos-duration="2000">
                        <img src={caferacerride2} alt="" />
                    </div>
                    <div className="infoText">
                        <h1>İkitəkərli özü hərəkət edən avtomobillər XIX əsrin 60-cı illərində yaranmağa başladı.</h1>
                        <p>
                            İkitəkərli özü hərəkət edən avtomobillər XIX əsrin 60-cı illərində yaranmağa başladı. Həmin vaxtda yeganə əlverişli güc qurğusu - buxar maşını idi - artıq ikitəkərli heyət üçün kompakt quraşdırılması kifayət qədər asan ola bilərdi. Lakin kiçik güclü həcm (Kouplend motosikletinin (1884) buxar mühərriki cəmi 9 kq, 0,25 at gücündə güclənmişdir), buxarın uzun müddətli yaranmasının təcrübəsizliyi üzündən və çox kiçik faydalı hərəkət əmsalı (faizlər vahidi) yalnız tək-tək sınaq nümunələrinin yaranmasını şərtləndirmişdir. Onlar üçün xidmət edən baza bütünlüklə metaldan və ya taxta elementlərdən ibarət primitiv velosipedlərdir, birbaşa olaraq qabaq təkərə bağlı olan pedal ötürücüsü ağır və rahat deyildi.
                        
                           Həmin vaxtda yeganə əlverişli güc qurğusu - buxar maşını idi - artıq ikitəkərli heyət üçün kompakt quraşdırılması kifayət qədər asan ola bilərdi. Lakin kiçik güclü həcm (Kouplend motosikletinin (1884) buxar mühərriki cəmi 9 kq, 0,25 at gücündə güclənmişdir), buxarın uzun müddətli yaranmasının təcrübəsizliyi üzündən və çox kiçik faydalı hərəkət əmsalı (faizlər vahidi) yalnız tək-tək sınaq nümunələrinin yaranmasını şərtləndirmişdir. Onlar üçün xidmət edən baza bütünlüklə metaldan və ya taxta elementlərdən ibarət primitiv velosipedlərdir, birbaşa olaraq qabaq təkərə bağlı olan pedal ötürücüsü ağır və rahat deyildi.
                        </p>
                        <Link to="/products" className="homeCardBtn">Məhsullara keçid</Link>
                    </div>
                </div>
            </div>
      <div className="container deliveryContainer">
        <div className="delivery__item">
          <div className="delivery__item-icon">
            <MdOutlineDeliveryDining />
          </div>
          <h4>Kuryer ilə planlı çatdırılma</h4>
          <ul className="dotted-list">
            <li><span>Pulsuz</span>
              <p>Məbləği 30 ₼-dən yuxarı olan bütün sifarişlər üçün.</p></li>
            <li><span>Uyğun gündə</span>
              <p>
                Sifarişi yerləşdirərkən, sizə uyğun olan çatdırılma gününü
                seçə bilərsiniz.
              </p>
            </li>
            <li>
              <span>Uyğun vaxtda</span>
              <p>
                Çatdırılma saat 9:00-dan saat 21:00-dək həyata keçirilir.
                Əməkdaşlarımız uyğun çatdırılma vaxtını seçmək üçün sizinlə
                əlaqə saxlıyacaq.
              </p>
            </li>
            <li>
              <p>Hər növ məhsullar üçün mövcuddur.</p>
            </li>
          </ul>
        </div>
        <div className="delivery__item">
          <div className="delivery__item-icon">
            <MdOutlineDeliveryDining />
          </div>
          <h4>Kuryer ilə ekspress çatdırılma</h4>
          <ul className="dotted-list">
            <li><span>Həmin gün ərzində çatdıracayıq.</span>
              <p>Sifariş 16:00 kimi yerləşdirdikdə həmin gün ərzində çatdırılır.</p></li>
            <li><span>Növbəti gün ərzində çatdıracayıq.</span>
              <p>
              Sifariş saat 16:00-dan sonra yerləşdirilirsə, növbəti gün ərzində çatdırılır.
              </p>
            </li>
            <li>
              <p>
              Ekspress çatdırılmanın qiymətini sifarişi yerləşdirərkən görmək olur.
              </p>
            </li>
            <li>
              <p>Əksər məhsullar üçün mövcuddur.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home