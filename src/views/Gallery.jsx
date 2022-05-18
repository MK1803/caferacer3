import React, { useEffect, useState } from 'react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";





function Gallery() {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        fetch("http://localhost:7000/gallery")
            .then((res) => res.json())
            .then((data) => setGallery(data));
    }, []);



    return (
        <div className="container">
            <h1 className='galleryTitle'>Qalereya</h1>
            <div className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6 galleryBox">
                {gallery.map((e, i) => (
                    <a data-fancybox="gallery" href={e.image} key={i} className="galleryCard">
                        <img className="rounded" src={e.image} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Gallery