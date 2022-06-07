import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cart from '../assets/icons/cart.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useSelector, useDispatch } from 'react-redux';

function Detailed() {

    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({});
    const dispatch = useDispatch()
    const { basketProd, basket } = useSelector((state) => state)
    const addToBasket = (id) => {

        console.log(basket.length + 1);
        let check = basket.some((e) => e.id === id)
        if (check) {
            dispatch({ type: "INC", payload: id })
        } else {
            dispatch({ type: "ADD", payload: id })
        }
    }
    useEffect(() => {
        fetch(`http://localhost:7000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                data ? setProduct(data) : navigate('/error')
            });
    }, []);
    return (
        <div className="container">
            <div className="detContainer">
                <div className="moreSlider">
                    <Swiper
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={product.image} alt="" className='moreImg' /></SwiperSlide>
                        <SwiperSlide><img src={product.image2} alt="" className='moreImg' /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="moreInfo">
                    <h1>{product.title}</h1>
                    <h2>{product.description}</h2>
                    <h3>Qiymət: {product.price}₼</h3>
                    <div className="moreCart">
                        <button className="addCardBtn" onClick={() => addToBasket(product.id, product.count, product.price)}><img src={cart} alt="" /></button>

                    </div>
                </div>
            </div>
            <div className="detText">
                <h1>
                    Məhsul təsviri
                </h1>
                <p>
                    Schuberth C3 Pro dəbilqə
                    Motosiklet dəbilqələrinin Rolls Royce, Schuberth C3 Pro, indiyə qədər ən səssiz və texnoloji cəhətdən ən inkişaf etmiş dəbilqələrdən biri olan orijinal C3-də təkmilləşdirmək üçün hazırlanmışdır. Geniş külək tunel sınağı zamanı optimallaşdırılmış arxa spoyler 100 mil/saatdan çox yüksək sürətlə yüksək aerodinamik xüsusiyyətlər nümayiş etdirərək C3 Pro-nu əsl idman dəbilqəsinə çevirir. 100 km/saatda 82 dB(A) gücləndirilmiş aeroakustikası ilə C3 Pro dünyanın ən səssiz dəbilqələrindən biridir.

                    C3 Pro həmçinin inteqrasiya olunmuş Schuberth SRC Sistemini qəbul etməyə hazırdır, C3 Pro həmçinin Bluetooth diapazonunun artırılması və daha yaxşı FM radio qəbulu üçün iki inteqrasiya olunmuş antenanı özündə birləşdirir. Daxili astar COOLMAX, Interpower və Thermocool kimi diqqətlə seçilmiş materiallardan hazırlanmışdır və rahatlıq baxımından yüksək standartlara uyğun olaraq geniş şəkildə yenidən formalaşdırılmış və yenidən işlənmişdir.
                </p>
            </div>
        </div>
    );
}

export default Detailed