import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import { BsTelephoneFill } from 'react-icons/bs'



function Footer() {
    return (
        <>
            <div className="container footer">
                <div className="foolertLogo">
                    <div className="logo">
                        <Link to="/">Moto <span>Racer</span></Link>
                    </div>
                </div>
                <ul className='foolterLinks'>
                    <li><Link to="/">Ana sahifə</Link></li>
                    <li><Link to="/gallery">Qalereya</Link></li>
                    <li><Link to="/products">Məhsullarımız</Link></li>
                    <li><Link to="/about">Haqqımızda</Link></li>
                    <li><Link to="/contact">Əlaqə</Link></li>

                </ul>
                <ul className='footerForm'>
                    <li><address><BiHomeAlt/>10 Naxçıvan, Bakı 1005</address></li>
                    <li><a href="tel:+994551234567"><BsTelephoneFill/> 055-123-45-67</a></li>
                    <li >
                        <form action="">Abunə olun:
                            <label htmlFor="">
                                <input type="text" placeholder={"E-Mail"} />
                                <button className="btnFooter"><AiOutlineArrowRight /></button>
                            </label>

                        </form>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer