import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import paymentImg from '../assets/img/payment.jpg'
import swal from 'sweetalert';


function Basket() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data)=> {
        swal({
            title: "Təşəkkürlər",
            text: "Ödəniş uğurlu oldu!",
            icon: "success",
            button: "Ok",
          });
    };




    const { basket } = useSelector((state) => state)
    const dispatch = useDispatch()
    const decItem = (id) => {
        let data = basket.find(e => e.id === id)
        if (data.count <= 1) {
            delItem(id)
        } else {
            dispatch({ type: "DEC", payload: id })
        }

    }
    const incItem = (id, price, count) => {
        dispatch({ type: "INC", payload: id })

    }

    const delItem = (id) => {
        basket.find((e) => e.id === id).count = 1
        dispatch({ type: "DEL", payload: id })
    }

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        basket.map(e => {
            total += e.price * e.count
        })
        setTotal(total)
        console.log(basket.length);
    }, [basket])



    return (
        <>
            <h1 className={basket.length<=0 ? "empty" : "disabled"}>Səbət boşdur!</h1>
            <div className={basket.length>0 ? "container basketContainer" : "disabled"}>
                {basket.map((e, i) => (
                    <div className="basketProd" key={i}>
                        <img src={e.image} alt="" className='basketCardImg' />
                        <div className="basketCardContent">
                            <h1>{e.title}</h1>
                            <p>{e.description}</p>
                            <p>Price: {e.price} ₼</p>
                            <div className="basketBtnDel">
                                <div className="basketBtns">
                                    <button className="btnMinus" onClick={() => decItem(e.id)}>-</button>
                                    <p>{e.count}</p>
                                    <button className="btnPlus" onClick={() => incItem(e.id, e.price, e.count)}>+</button>
                                </div>
                                <button className="deleteBasket" onClick={() => delItem(e.id)}>{<AiOutlineDelete />}</button>
                            </div>
                            <h3 className='itemTotal'>Toplam: {e.price * e.count} ₼</h3>
                        </div>
                    </div>
                ))}

                <div className="container paymentBasket">
                    <div className="total">
                        <p>Cəmi: {total} ₼</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">Kartın nömrəsi <br />
                                <input {...register("cardNumber", { required: true })} className="cardNum" placeholder='0000 0000 0000 0000' />
                                {errors.cardNumber && <span className='formError'>Doldurmaq lazımdır!</span>}
                            </label>

                            <div className="cardDateContainer"><div>
                                Gün Ay
                            </div>
                                <label htmlFor="">
                                    <input {...register("dd", { required: true })} type="text" className='cardDate' placeholder='DD' />
                                    {errors.dd && <span className='formError'>Doldurmaq lazımdır!</span>}
                                </label>
                                <label htmlFor="">
                                    <input {...register("mm", { required: true })} type="text" className='cardDate' placeholder='MM' />
                                    {errors.mm && <span className='formError'>Doldurmaq lazımdır!</span>}
                                </label>
                            </div>

                            <label htmlFor="">Ad Soyad <br />
                                <input {...register("FNSN", { required: true })} />
                                {errors.FNSN && <span className='formError'>Doldurmaq lazımdır!</span>}
                                <br />
                            </label>
                            <label htmlFor="">Ünvan: <br />
                                <input {...register("adress", { required: true })} />
                                {errors.adress && <span className='formError'>Doldurmaq lazımdır!</span>}
                                <br />
                            </label>
                            <label htmlFor="">Mobil nömrəsi: <br />
                                <input {...register("tel", { required: true })} />
                                {errors.tel && <span className='formError'>Doldurmaq lazımdır!</span>}
                            </label>

                            <br />
                            <button className="payModal" type='submit' >
                                Ödəniş et
                            </button>
                        </form>

                    </div>
                    <div className="paymentImg">
                        <img src={paymentImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket