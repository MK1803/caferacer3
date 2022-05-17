import React, {useEffect, useState} from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
function Basket() {
    const { basket } = useSelector((state) => state)
    const dispatch = useDispatch()
    const decItem = (id) => {
        let data = basket.find(e => e.id === id)
        if (data.count <=1){
            delItem(id)
        }else{
            dispatch({type: "DEC", payload: id})
        }
        
    }
    const incItem = (id, price, count) => {
        dispatch({type: "INC", payload: id})

    }

    const delItem = (id) => {
        basket.find((e) => e.id === id).count = 1
        dispatch({type: "DEL", payload: id})
    }

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        basket.map(e => {
            total += e.price * e.count
        })
        setTotal(total)
    },[basket])
    
    return (
        <>
            <div className="container basketContainer">
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
                                    <span>{e.count}</span>
                                    <button className="btnPlus" onClick={() => incItem(e.id, e.price, e.count)}>+</button>
                                </div>
                                <button className="deleteBasket" onClick={() => delItem (e.id)}>{<AiOutlineDelete/>}</button>
                            </div>
                            <h3 className='itemTotal'>Toplam: {e.price * e.count} ₼</h3>
                        </div>
                    </div>
                ))}

                <div className="total">
                    Cəmi: {total} ₼
                </div>
            </div>
        </>
    )
}

export default Basket