import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';

function Header() {

  const [burgerMenu, setBurger] = useState(false)
  const [fixedBool, setFixedBool] = useState(false)
  const drop = () => {
    setBurger(!burgerMenu)
  }


  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 80) {
      setFixedBool(true)
    } else {
      setFixedBool(false)
    }
  });





  return (


    <>
      <div className={fixedBool ? "container header fixed" : "container header"} >
        <div className="headerContent" onClick={() => setBurger(false)}>
          <div className="logo">
            <Link to="/">Moto <span>Racer</span></Link>
          </div>
          <div onClick={e => e.stopPropagation()}>
            <div className="burger" onClick={() => drop()}>
              <AiOutlineMenu />
            </div>
          </div>
          <ul className={burgerMenu ? "navBar active" : "navBar"} onClick={() => setBurger(true)}>
            <li><NavLink to="/">Ana sahifə</NavLink></li>
            <li className="dropDown" ><NavLink to="/products">Məhsullarımız
            </NavLink></li>
            <li><NavLink to="/gallery">Qalereya</NavLink></li>
            <li><NavLink to="/about">Haqqımızda</NavLink></li>
            <li><NavLink to="/contact">Əlaqə</NavLink></li>
            <li><NavLink to="/basket" className='busketBtn'><CgShoppingCart /></NavLink>
            <div className="basketNum">
              basket.length
            </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header