import React from 'react'

function PaginNum({productsPerPage, totlaProducts, paginate, currentPage}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totlaProducts / productsPerPage,); i++) {
        pageNumbers.push(i)
    }

    

    return (
        <>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            
                            <button  className={currentPage == number ? "paginBtn active" : "paginBtn"} onClick={() => paginate(number)}> {number} </button>
                        </li>
                        
                    ))
                    
                }
            </ul>

        </>
    )
}

export default PaginNum