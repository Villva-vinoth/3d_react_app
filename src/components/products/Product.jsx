import React, { useRef, useState } from 'react'
import ProductHeader from './productHeader/ProductHeader'
import ProductContent from "./productContent/ProductContent";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import './product.css'
// import { Route, Routes } from 'react-router-dom';
// import OverViewProduct from './productContent/overView/overViewProduct';
import { productList } from './ProductsData';
const Product = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productList.slice(firstIndex, lastIndex)
  const npages = Math.ceil(productList.length / recordsPerPage)

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
      {
        records.map((item, index) => {
          return (
            <ProductContent img={item.img} type={item.type} describe={item.describe}
              voltageRange={item.voltageRange}
              ratedPower={item.ratedPower}
              peakPower={item.peakPower}
              maxRpm={item.MaxRPM}
              peakTorque={item.peakTorque}
              overloadTorque={item.overloadTorque}
              dutyCycle={item.dutyCycle}
              weight={item.weight}
              nominalVoltage={item.NominalVoltage}
              maxCurrent={item.maxCurrent}
              voltage={item.voltage}
              batteryCurrent={item.batteryCurrent}
              phaseCurrent={item.phaseCurrent}
              key={index}
              RatedVoltage={item.RatedVoltage}
              AbsoluteMaxVoltage={item.AbsoluteMaxVoltage}
              ContinousCurrent={item.ContinousCurrent}
              PeakCurrent={item.PeakCurrent}
              OperatingMode={item.OperatingMode}
              Support={item.Support}
            />
          )
        })
      }
      <div className='product-pagination'>
        <ul >
          <li>
            <a href="#" className={currentPage == 1 ? "product-icon-num product-deactive" : "product-icon-num product-active"} onClick={previousPage} ref={prevRef}>
              <FaArrowLeftLong size={25} />
              <img src='' alt='' />
            </a>
          </li>
          {
            <div className='pro-cont'>
              <div className='product-page-num' >{currentPage}</div>
              <div className='product-page-num product-color' >{currentPage == npages ? '-' : npages}</div>
            </div>
            // records.map((item, index) => {
            //   return (
            //     <div className='product-record-num' key={index}>
            //       <div className='product-page-num' >{currentPage}</div>
            //     </div>
            //   )
            // })
          }
          <li>
            <a href="#" className={currentPage == npages ? "product-deactive product-icon-num" : "product-icon-num product-active"} onClick={nextPage} ref={nextRef}>
              <FaArrowRightLong size={25} />
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Product