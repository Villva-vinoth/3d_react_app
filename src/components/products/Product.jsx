import React, { useRef, useState } from 'react'
import ProductHeader from './productHeader/ProductHeader'
import ProductContent from "./productContent/ProductContent";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";

import './product.css'
import { Route, Routes } from 'react-router-dom';
import OverViewProduct from './productContent/overView/overViewProduct';
const Product = () => {
  const data = [{ data: 1 }, { data: 2 }, { data: 3 },{ data: 4 }, { data: 5 }]

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex)
  const npages = Math.ceil(data.length / recordsPerPage)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const previousPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }


  }
  const nextPage = () => {

    if (currentPage != npages && npages != 0) {
      setCurrentPage(currentPage + 1)
    }

  }
  return (
    <div className='Product-page-display'>
      <ProductHeader />
      <ProductContent />
      <div className='product-pagination'>
        <ul >
          <li>
            <a href="#" className={currentPage == 1 ? "product-icon-num product-deactive" : "product-icon-num product-active"} onClick={previousPage} ref={prevRef}><GrChapterPrevious size={25}/></a>
          </li>
          {
            records.map((item) => {
              return (
                <div className='product-record-num'>
                                  <div className='product-page-num' >{item.data}</div>
                                  {/* <div className='product-page-num'>{item.data+1}</div>
                                  <div className='product-page-num'>{item.data+2}</div>
                                  <div className='product-page-num'>{'-'}</div> */}


                </div>
              )
            })
          }
          <li>
            <a href="#" className={currentPage == npages ? "product-deactive product-icon-num" : "product-icon-num product-active"} onClick={nextPage} ref={nextRef}><GrChapterNext size={25} /></a>
          </li>

        </ul>
      </div>
      
    </div>
  )
}

export default Product