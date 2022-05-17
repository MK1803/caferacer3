import React, {useState} from 'react'
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';

function Header() {

  const [burgerMenu, setBurger] = useState(false)
  const drop = () => {
    setBurger(!burgerMenu)
  }
  return (



    <>
      <div className="container header">
        <div className="headerContent">
          <div className="logo">
            <Link to="/">Moto <span>Racer</span></Link>
          </div>
          <div className="burger" onClick={() => drop()}>
            <AiOutlineMenu />
          </div>
          <ul className={burgerMenu ? "navBar active" : "navBar"}>
            <li><NavLink to="/">Ana sahifə</NavLink></li>
            <li className="dropDown" ><NavLink to="/products">Məhsullarımız
            </NavLink></li>
            <li><NavLink to="/gallery">Qalereya</NavLink></li>
            <li><NavLink to="/about">Haqqımızda</NavLink></li>
            <li><NavLink to="/contact">Əlaqə</NavLink></li>
            <li><NavLink to="/basket" className='busketBtn'><CgShoppingCart/></NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header