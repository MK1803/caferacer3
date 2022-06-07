import React, { useState } from 'react'
import cart from '../assets/icons/cart.svg'
import close from '../assets/icons/xmark-solid.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Navigation } from "swiper";
import { CgShoppingCart } from 'react-icons/cg';
import {Link} from 'react-router-dom'


function CatProd({products}) {
    const dispatch = useDispatch()
    const { basketProd, basket } = useSelector((state) => state)

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
        let check = basket.some((e) => e.id === id)
        if (check) {
            dispatch({ type: "INC", payload: id })
        } else {
            dispatch({ type: "ADD", payload: id })
        }
    }






    return (
        <>
            <div className="products">
                {products.map((e, i) => (
                    <div className="card" key={i}>
                        <img src={e.image} alt="" className="productImg" />
                        <div className="cardInfo">
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                            <p>{e.price} ₼</p>
                            <div className="cardBtns">
                                {/* <button className="btnMore" onClick={() => openModal(e)}>More...</button> */}
                                <Link className="btnMore" to={`/product/${e.id}`}>Daha çox...</Link>
                                <button className="addCardBtn" onClick={() => addToBasket(e.id, e.count, e.price)}><CgShoppingCart /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </>
    )
}

export default CatProd