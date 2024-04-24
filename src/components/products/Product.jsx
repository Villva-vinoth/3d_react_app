import React, { useEffect, useRef, useState } from 'react'
import ProductHeader from './productHeader/ProductHeader'
import ProductContent from "./productContent/ProductContent";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import './product.css'
// import { Route, Routes } from 'react-router-dom';
// import OverViewProduct from './productContent/overView/overViewProduct';
import { productList } from './ProductsData';
import axios from 'axios';
import { GET_ALL_PRODUCTS } from '../../apiServices';
import ReactPaginate from 'react-paginate';
const Product = () => {
  const [productItems,setProductItems] =useState([])


  useEffect(()=>{

    const getAllProductsClient = async () =>{

      await axios.get(GET_ALL_PRODUCTS).then((response) =>{
        if(response.data.success){
          setProductItems(response.data.data)
        }
      }).catch((err)=>{
        console.log(err)
      })
  
    }
    getAllProductsClient()
  },[])

 

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productItems.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productItems.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };




  return (
    <div className='Product-page-display'>
      <ProductHeader />
      {
        currentItems.map((item, index) => {
          return (
            <ProductContent
            id={item.product_id}
             img={item.product_image} type={item.product_title} describe={item.product_description}
              voltageRange={item.voltage_range}
              ratedPower={item.rated_power}
              peakPower={item.peak_power}
              maxRpm={item.max_RPM}
              peakTorque={item.peak_torque}
              overloadTorque={item.overload_torque}
              dutyCycle={item.duty_cycle}
              weight={item.weight}
              nominalVoltage={item.nominal_voltage}
              maxCurrent={item.max_current}
              voltage={item.voltage}
              batteryCurrent={item.batteryCurrent}
              phaseCurrent={item.phaseCurrent}
              key={index}
              RatedVoltage={item.rated_voltage}
              AbsoluteMaxVoltage={item.absolute_max_voltage}
              ContinousCurrent={item.continous_current}
              PeakCurrent={item.peak_current}
              OperatingMode={item.operating_mode}
              Support={item.support}
            />
          )
        })
      }
      <div className='product-pagination'>
        <ReactPaginate
          breakLabel="..."
          nextLabel={ <FaArrowRightLong  />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<FaArrowLeftLong />}
          renderOnZeroPageCount={null}
          containerClassName='pagination-container-admin'
          pageLinkClassName='product-color  '
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='product-page-num'
        />
      </div>

    </div>
  )
}

export default Product