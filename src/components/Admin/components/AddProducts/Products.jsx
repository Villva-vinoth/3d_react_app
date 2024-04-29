import React, { useEffect, useState } from 'react'
import './addProducts.css'
import { useNavigate } from 'react-router-dom/dist'
import axios from 'axios'
import { GET_ALL_PRODUCTS } from '../../../../apiServices'
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { ToastContainer } from 'react-toastify'


const Products = () => {
  const [productItems, setProductItems] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false)
  const [refreshFlag, setRefreshFlag] = useState(false)
  useEffect(() => {
    const getAllProducts = async () => {
      await axios.get(GET_ALL_PRODUCTS).then((res) => {
        console.log(res.data.data)
        setProductItems(res.data.data)
      }).catch((err) => { console.log(err) });

    }
    console.log("refresh", refreshFlag)
    getAllProducts()
  }, [deleteFlag, refreshFlag])

  // console.log("refresh",refreshFlag)

  const nav = useNavigate()

  // Example items, to simulate fetching from another resources.

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

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
    <div className='admin-products'>
      <div className='wrapper-container'>
        <div className='admin-product-header'>
          <h2>Products</h2>
          <button onClick={() => { nav("/admin/add-products") }}>Add products</button>
        </div>
        <div className='Admin-product-container'>
          {
            currentItems && currentItems.map(product => {
              console.log("mapped times ")
              return (<ProductCard key={product.product_id}
                productTitle={product.product_title}
                productImage={product.product_image}
                productDate={product.createAt}
                productId={product.product_id}
                productDesc={product.product_description}
                voltageRange={product.voltage_range}
                nominalVoltage={product.nominal_voltage}
                ratedVoltage={product.rated_voltage}
                ratedPower={product.rated_power}
                absoluteMaxVoltage={product.absolute_max_voltage}
                maxCurrent={product.max_current}
                peakPower={product.peak_power}
                maxRPM={product.max_RPM}
                peakTorque={product.peak_torque}
                overLoadedTorque={product.overload_torque}
                dutyCycle={product.duty_cycle}
                peakCurrent={product.peak_current}
                weight={product.weight}
                continousCurrent={product.continous_current}
                support={product.support}
                operatingMode={product.operating_mode}
                setDeleteFlag={setDeleteFlag}
                setRefreshFlag={setRefreshFlag} />)
            })
          }



        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<MdKeyboardDoubleArrowRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<MdKeyboardDoubleArrowLeft />}
          renderOnZeroPageCount={null}
          containerClassName='pagination-container-admin'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Products