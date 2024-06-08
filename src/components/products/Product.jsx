import React, { useEffect, useRef, useState } from 'react'
import ProductHeader from './productHeader/ProductHeader'
import ProductContent from "./productContent/ProductContent";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import './product.css'
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
  const itemsPerPage =6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems=productItems.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(productItems.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % (productItems.length);
  
    setItemOffset(newOffset);
  };


  useEffect(()=>{
    window.scrollTo(0,0)
  },[currentItems])

  // useEffect(()=>{
  //   setCurrentItems(currentItems)

  // },[currentItems])



  return (
    <div className='Product-page-display'>
      <ProductHeader />
      {
        currentItems && currentItems.map((item, index) => {
         
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
          pageRangeDisplayed={5}
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


// import React, { useRef, useState } from 'react'
// import ProductHeader from './productHeader/ProductHeader'
// import ProductContent from "./productContent/ProductContent";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// import './product.css'
// // import { Route, Routes } from 'react-router-dom';
// // import OverViewProduct from './productContent/overView/overViewProduct';
// import { productList } from './ProductsData';
// const Product = () => {
//   const [currentPage, setCurrentPage] = useState(1)
//   const recordsPerPage = 4;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = productList.slice(firstIndex, lastIndex)
//   const npages = Math.ceil(productList.length / recordsPerPage)

//   const prevRef = useRef(null)
//   const nextRef = useRef(null)

//   const previousPage = () => {
//     if (currentPage != 1) {
//       setCurrentPage(currentPage - 1)
//     }


//   }
//   const nextPage = () => {

//     if (currentPage != npages && npages != 0) {
//       setCurrentPage(currentPage + 1)
//     }

//   }
//   return (
//     <div className='Product-page-display'>
//       <ProductHeader />
//       {
//         records.map((item, index) => {
//           return (
//             <ProductContent img={item.img} type={item.type} describe={item.describe}
//               voltageRange={item.voltageRange}
//               ratedPower={item.ratedPower}
//               peakPower={item.peakPower}
//               maxRpm={item.MaxRPM}
//               peakTorque={item.peakTorque}
//               overloadTorque={item.overloadTorque}
//               dutyCycle={item.dutyCycle}
//               weight={item.weight}
//               nominalVoltage={item.NominalVoltage}
//               maxCurrent={item.maxCurrent}
//               voltage={item.voltage}
//               batteryCurrent={item.batteryCurrent}
//               phaseCurrent={item.phaseCurrent}
//               key={index}
//               RatedVoltage={item.RatedVoltage}
//               AbsoluteMaxVoltage={item.AbsoluteMaxVoltage}
//               ContinousCurrent={item.ContinousCurrent}
//               PeakCurrent={item.PeakCurrent}
//               OperatingMode={item.OperatingMode}
//               Support={item.Support}
//             />
//           )
//         })
//       }
//       <div className='product-pagination'>
//         <ul >
//           <li>
//             <a href="#" className={currentPage == 1 ? "product-icon-num product-deactive" : "product-icon-num product-active"} onClick={previousPage} ref={prevRef}>
//               <FaArrowLeftLong size={25} />
//               <img src='' alt='' />
//             </a>
//           </li>
//           {
//             <div className='pro-cont'>
//               <div className='product-page-num' >{currentPage}</div>
//               <div className='product-page-num product-color' >{currentPage == npages ? '-' : npages}</div>
//             </div>
//             // records.map((item, index) => {
//             //   return (
//             //     <div className='product-record-num' key={index}>
//             //       <div className='product-page-num' >{currentPage}</div>
//             //     </div>
//             //   )
//             // })
//           }
//           <li>
//             <a href="#" className={currentPage == npages ? "product-deactive product-icon-num" : "product-icon-num product-active"} onClick={nextPage} ref={nextRef}>
//               <FaArrowRightLong size={25} />
//             </a>
//           </li>

//         </ul>
//       </div>

//     </div>
//   )
// }

// export default Product