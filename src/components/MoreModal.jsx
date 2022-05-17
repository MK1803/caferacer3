// import React, { useEffect, useState } from 'react'
// import close from '../assets/icons/xmark-solid.svg'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";


// // import "../assets/css/style";
// function MoreModal() {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:7000/products")
//             .then((res) => res.json())
//             .then((data) => setProducts(data));
//     }, []);


//     return (
//         <>
//             <div className={modal ? "more": "more active"}>
//                 <div className="moreContent">
//                     <button className="closeModal"><img src={close} alt="" /></button>
//                     <div className="moreSlider">
//                         <Swiper
//                             pagination={{
//                                 type: "progressbar",
//                             }}
//                             navigation={true}
//                             modules={[Pagination, Navigation]}
//                             className="mySwiper"
//                         >
//                             <SwiperSlide>Slide 1</SwiperSlide>
//                             <SwiperSlide>Slide 2</SwiperSlide>
//                         </Swiper>
//                     </div>
//                     <div className="moreInfo"></div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default MoreModal