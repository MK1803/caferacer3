import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from 'axios'
import CatProd from './CatProd'
import PaginNum from './PaginNum'
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'

function Category() {
    const { category } = useParams()
    const [products, setProducts] = useState({ category: [] });
    const [productsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)



    const lastProductIndex = currentPage * productsPerPage
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProduct = products.category.slice(firstProductIndex, lastProductIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    const toTheFirst = () => {
        setCurrentPage(1)
    }


    useEffect(() => {
        const getCountries = async () => {
            const res = await axios.get('http://localhost:7000/products')
            let item = res.data.filter(e => e.category === category)
            setProducts({ ...products, category: item })

        }
        getCountries()
    }, [category])

    const nextPage = () => {
        if (currentPage > Math.ceil(products.category.length / productsPerPage - 1)) {
            setCurrentPage(0)
        }
        setCurrentPage(prev => prev + 1)
    }

    const prevPage = () => {
        setCurrentPage(prev => prev - 1)
        if (currentPage <= 1) {
            setCurrentPage(Math.ceil(products.category.length / productsPerPage))
        }
    }

    return (
        <>
            <div className="container produtcsContainer mnvh50">
                <div className="categories ">
                    <ul>
                        <li><Link to="/products">All</Link></li>
                        <li onClick={toTheFirst}><NavLink to="/products/helmets">Helmets</NavLink></li>
                        <li onClick={toTheFirst}><NavLink to="/products/jackets">Jackets</NavLink></li>
                        <li onClick={toTheFirst}><NavLink to="/products/pants">Pants</NavLink></li>
                        <li onClick={toTheFirst}><NavLink to="/products/shoes">Shoes</NavLink></li>
                    </ul>
                </div>

                <div className="prods">
                    <CatProd products={currentProduct} />
                    <div className="prodPagin">
                        <button className="btnNum" onClick={prevPage}><MdNavigateBefore/></button>
                        <PaginNum productsPerPage={productsPerPage} totlaProducts={products.category.length} paginate={paginate} currentPage={currentPage}/>
                        <button className="btnNum" onClick={nextPage}><MdNavigateNext/></button>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Category