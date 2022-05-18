import React from "react";
import { NavLink, Link } from 'react-router-dom'
import card1 from "../assets/img/bombrider2.jpg"
import card2 from "../assets/img/brown1.jpg"
import card3 from "../assets/img/reax_reax215_jeans2.jpg"
import card4 from "../assets/img/brown1.jpg"



function Products() {
    
    



    return (
        
        <>

            <div className="container produtcsContainer mnvh50">
                <div className="categories">
                    <ul>
                        <li><NavLink to="/products">All</NavLink></li>
                        <li><NavLink to="/products/helmets">Helmets</NavLink></li>
                        <li><NavLink to="/products/jackets">Jackets</NavLink></li>
                        <li><NavLink to="/products/pants">Pants</NavLink></li>
                        <li><NavLink to="/products/shoes">Shoes</NavLink></li>
                    </ul>
                </div>
                <div className="products">
                    <Link to="/products/helmets" className="cardMain">
                        <img src={card1} />
                        <h1>Helmets</h1>
                    </Link>
                    <Link to="/products/jackets" className="cardMain">
                        <img src={card2} />
                        <h1>Jackets</h1>
                    </Link>
                    <Link to="/products/pants" className="cardMain">
                        <img src={card3} />
                        <h1>Pants</h1>
                    </Link>
                    <Link to="/products/shoes" className="cardMain">
                        <img src={card4} />
                        <h1>Shoes</h1>
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Products