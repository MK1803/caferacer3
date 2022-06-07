import React from "react";
import { NavLink, Link } from 'react-router-dom'
import card1 from "../assets/img/bombrider2.jpg"
import card2 from "../assets/img/brown1.jpg"
import card3 from "../assets/img/reax_reax215_jeans2.jpg"
import card4 from "../assets/img/24.jpg"



function Products() {
    
    



    return (
        
        <>

            <div className="container produtcsContainer mnvh50">
                <div className="categories">
                    <ul>
                        <li><NavLink to="/products">Hamısı</NavLink></li>
                        <li><NavLink to="/products/helmets">Dəbilqələr</NavLink></li>
                        <li><NavLink to="/products/jackets">Gödəkçələr</NavLink></li>
                        <li><NavLink to="/products/pants">Şalvar</NavLink></li>
                        <li><NavLink to="/products/shoes">Ayaqqabılar</NavLink></li>
                    </ul>
                </div>
                <div className="products">
                    <Link to="/products/helmets" className="cardMain">
                        <img src={card1} />
                        <h1>Dəbilqələr</h1>
                    </Link>
                    <Link to="/products/jackets" className="cardMain">
                        <img src={card2} />
                        <h1>Gödəkçələr</h1>
                    </Link>
                    <Link to="/products/pants" className="cardMain">
                        <img src={card3} />
                        <h1>Şalvar</h1>
                    </Link>
                    <Link to="/products/shoes" className="cardMain">
                        <img src={card4} />
                        <h1>Ayaqqabılar</h1>
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Products