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
                  <h1>D??ri Bomber G??d??k????</h1>
                  <p>Bu d??ri bayker g??d??k????si rahat, lakin d??bli t??sad??fi geyimi t??c??ss??m etdirir.</p>
                  <Link to="/products/jackets">M??hsullara ke??id</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd1} alt="" />
                <div className="homeProdText">
                  <h1>D??ri Bomber G??d??k????</h1>
                  <p>Bu d??ri bayker g??d??k????si rahat, lakin d??bli t??sad??fi geyimi t??c??ss??m etdirir.</p>
                  <Link to="/products/helmets">M??hsullara ke??id</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd3} alt="" />
                <div className="homeProdText">
                  <h1>D??ri Bomber G??d??k????</h1>
                  <p>Bu d??ri bayker g??d??k????si rahat, lakin d??bli t??sad??fi geyimi t??c??ss??m etdirir.</p>
                  <Link to="/products/pants">M??hsullara ke??id</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeProd">
                <img src={homeProd4} alt="" />
                <div className="homeProdText">
                  <h1>D??ri Bomber G??d??k????</h1>
                  <p>Bu d??ri bayker g??d??k????si rahat, lakin d??bli t??sad??fi geyimi t??c??ss??m etdirir.</p>
                  <Link to="/products/shoes">M??hsullara ke??id</Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="homeProductRight">
          <Link className="cta" to="contact">
            <span>Biziml?? ??laq?? saxlay??n!</span>
            <span>
              <img src={next} alt="" />
            </span>
          </Link>
        </div>
      </div>
      <div className="container homeCardContainer">
        <div className="homeCard">
          <img src={chain} alt="" />
          <h1>Ham??s?? z??ncir ??????n!</h1>
          <p>
            Bu b??lm??d?? siz z??ncir?? bax??m?? v?? d??yi??dirilm??si ??????n h??r ??eyi tapa bil??rsiniz!
          </p>

          <Link to="/products/chains" className="homeCardBtn">M??hsullara ke??id</Link>
        </div>
        <div className="homeCard">
          <img src={oil} alt="" />
          <h1>Ya?? d??yi??m??si ??????n h??r ??ey!</h1>
          <p>
            Bu b??lm??d?? ya??lar, filtrl??r v?? al??tl??rin b??y??k se??imi var!
          </p>
          <Link to="/products/oils" className="homeCardBtn">M??hsullara ke??id</Link>
        </div>
      </div>
      <div className="infoContent mrInfo">
                <div className="homeInfo infoBg">
                    <div className="infoImg" data-aos="fade-right" data-aos-duration="2000">
                        <img src={caferacerride2} alt="" />
                    </div>
                    <div className="infoText">
                        <h1>??kit??k??rli ??z?? h??r??k??t ed??n avtomobill??r XIX ??srin 60-c?? ill??rind?? yaranma??a ba??lad??.</h1>
                        <p>
                            ??kit??k??rli ??z?? h??r??k??t ed??n avtomobill??r XIX ??srin 60-c?? ill??rind?? yaranma??a ba??lad??. H??min vaxtda yegan?? ??lveri??li g??c qur??usu - buxar ma????n?? idi - art??q ikit??k??rli hey??t ??????n kompakt qura??d??r??lmas?? kifay??t q??d??r asan ola bil??rdi. Lakin ki??ik g??cl?? h??cm (Kouplend motosikletinin (1884) buxar m??h??rriki c??mi 9 kq, 0,25 at g??c??nd?? g??cl??nmi??dir), buxar??n uzun m??dd??tli yaranmas??n??n t??cr??b??sizliyi ??z??nd??n v?? ??ox ki??ik faydal?? h??r??k??t ??msal?? (faizl??r vahidi) yaln??z t??k-t??k s??naq n??mun??l??rinin yaranmas??n?? ????rtl??ndirmi??dir. Onlar ??????n xidm??t ed??n baza b??t??nl??kl?? metaldan v?? ya taxta elementl??rd??n ibar??t primitiv velosipedl??rdir, birba??a olaraq qabaq t??k??r?? ba??l?? olan pedal ??t??r??c??s?? a????r v?? rahat deyildi.
                        
                           H??min vaxtda yegan?? ??lveri??li g??c qur??usu - buxar ma????n?? idi - art??q ikit??k??rli hey??t ??????n kompakt qura??d??r??lmas?? kifay??t q??d??r asan ola bil??rdi. Lakin ki??ik g??cl?? h??cm (Kouplend motosikletinin (1884) buxar m??h??rriki c??mi 9 kq, 0,25 at g??c??nd?? g??cl??nmi??dir), buxar??n uzun m??dd??tli yaranmas??n??n t??cr??b??sizliyi ??z??nd??n v?? ??ox ki??ik faydal?? h??r??k??t ??msal?? (faizl??r vahidi) yaln??z t??k-t??k s??naq n??mun??l??rinin yaranmas??n?? ????rtl??ndirmi??dir. Onlar ??????n xidm??t ed??n baza b??t??nl??kl?? metaldan v?? ya taxta elementl??rd??n ibar??t primitiv velosipedl??rdir, birba??a olaraq qabaq t??k??r?? ba??l?? olan pedal ??t??r??c??s?? a????r v?? rahat deyildi.
                        </p>
                        <Link to="/products" className="homeCardBtn">M??hsullara ke??id</Link>
                    </div>
                </div>
            </div>
      <div className="container deliveryContainer">
        <div className="delivery__item">
          <div className="delivery__item-icon">
            <MdOutlineDeliveryDining />
          </div>
          <h4>Kuryer il?? planl?? ??atd??r??lma</h4>
          <ul className="dotted-list">
            <li><span>Pulsuz</span>
              <p>M??bl????i 30 ???-d??n yuxar?? olan b??t??n sifari??l??r ??????n.</p></li>
            <li><span>Uy??un g??nd??</span>
              <p>
                Sifari??i yerl????dir??rk??n, siz?? uy??un olan ??atd??r??lma g??n??n??
                se???? bil??rsiniz.
              </p>
            </li>
            <li>
              <span>Uy??un vaxtda</span>
              <p>
                ??atd??r??lma saat 9:00-dan saat 21:00-d??k h??yata ke??irilir.
                ??m??kda??lar??m??z uy??un ??atd??r??lma vaxt??n?? se??m??k ??????n sizinl??
                ??laq?? saxl??yacaq.
              </p>
            </li>
            <li>
              <p>H??r n??v m??hsullar ??????n m??vcuddur.</p>
            </li>
          </ul>
        </div>
        <div className="delivery__item">
          <div className="delivery__item-icon">
            <MdOutlineDeliveryDining />
          </div>
          <h4>Kuryer il?? ekspress ??atd??r??lma</h4>
          <ul className="dotted-list">
            <li><span>H??min g??n ??rzind?? ??atd??racay??q.</span>
              <p>Sifari?? 16:00 kimi yerl????dirdikd?? h??min g??n ??rzind?? ??atd??r??l??r.</p></li>
            <li><span>N??vb??ti g??n ??rzind?? ??atd??racay??q.</span>
              <p>
              Sifari?? saat 16:00-dan sonra yerl????dirilirs??, n??vb??ti g??n ??rzind?? ??atd??r??l??r.
              </p>
            </li>
            <li>
              <p>
              Ekspress ??atd??r??lman??n qiym??tini sifari??i yerl????dir??rk??n g??rm??k olur.
              </p>
            </li>
            <li>
              <p>??ks??r m??hsullar ??????n m??vcuddur.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home