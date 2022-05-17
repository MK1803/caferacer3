import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cart from '../assets/icons/cart.svg'
import { NavLink, Link } from 'react-router-dom'
import close from '../assets/icons/xmark-solid.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector, useDispatch } from 'react-redux'
import { Pagination, Navigation } from "swiper";

function Category() {
    const dispatch = useDispatch()
    const {basketProd, basket} = useSelector((state) => state)
    const { category } = useParams()
    const [products, setProducts] = useState({ category: [] });
    const [modal, setModal] = useState(true)
    const [arrModal, setArrModal] = useState([])

    const openModal = (e) => {
        setModal(!modal)
        setArrModal([e])
    }
    const closeModal = () => {
        setModal(!modal)
        setArrModal([])
    }

    const addToBasket = (id) => {

        console.log(basket.length +1);
        let check = basket.some((e) => e.id === id)
        if (check) {
            dispatch({ type: "INC", payload: id })
        } else {
            dispatch({ type: "ADD", payload: id })
        }
    }

    

    useEffect(() => {
        fetch("http://localhost:7000/products")
            .then((res) => res.json())
            .then((data) => {
                let item = data.filter(e => e.category === category)
                setProducts({ ...products, category: item })
            });
    }, [category]);

    return (
        <>
            <div className="container produtcsContainer">
                <div className="categories">
                    <ul>
                        <li><Link to="/products">All</Link></li>
                        <li><NavLink to="/products/helmets">Helmets</NavLink></li>
                        <li><NavLink to="/products/jackets">Jackets</NavLink></li>
                        <li><NavLink to="/products/pants">Pants</NavLink></li>
                        <li><NavLink to="/products/shoes">Shoes</NavLink></li>
                    </ul>
                </div>

                <div className="products">
                    {products.category.map((e, i) => (
                        <div className="card" key={i}>
                            <img src={e.image} alt="" className="productImg" />
                            <div className="cardInfo">
                                <h3>{e.title}</h3>
                                <p>{e.description}</p>
                                <p>{e.price} ₼</p>
                                <div className="cardBtns">
                                    <button className="btnMore" onClick={() => openModal(e)}>More...</button>
                                    <button className="addCardBtn" onClick={() => addToBasket(e.id, e.count, e.price)}><img src={cart} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={modal ? "more" : "more active"}>
                <div className={modal ? "moreContent" : "moreContent active"}>
                    {arrModal.map((e, i) => (
                        <div className="moreWrap" key={i}>
                            <button className="closeModal" onClick={() => closeModal()}><img src={close} alt="" /></button>
                            <div className="moreSlider">
                                <Swiper
                                    pagination={{
                                        type: "progressbar",
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src={e.image} alt="" className='moreImg' /></SwiperSlide>
                                    <SwiperSlide><img src={e.image2} alt="" className='moreImg' /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="moreInfo">
                                <h1>{e.title}</h1>
                                <h2>{e.description}</h2>
                                <h3>Price: {e.price}₼</h3>
                                <div className="moreCart">
                                    <button className="addCardBtn" onClick={() => addToBasket(e.id, e.count, e.price)}><img src={cart} alt="" /></button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Category