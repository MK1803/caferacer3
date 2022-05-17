import React from 'react'

function Contact() {
  return (
    <>
        <div className="container contact">
            <div className="contacMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10490.735756442868!2d107.89799453551475!3d21.623552116549455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314b52d5c0b84f0d%3A0x10b7587e68356cc2!2sNahui!5e0!3m2!1sru!2s!4v1652690923706!5m2!1sru!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="contactForm">
                <form action="">
                    <label htmlFor="">Adınız:
                    <input type="text" />
                    </label>
                    <label htmlFor="">E-mail:
                    <input type="text" />
                    </label>
                    <label htmlFor="">Nömrəniz:
                    <input type="text" />
                    </label>
                    <label htmlFor="">Ünvan:
                    <input type="text" />
                    </label>
                    <button className="btnContant">Göndər</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact