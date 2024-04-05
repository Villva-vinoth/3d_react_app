import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import OverViewProduct from './productContent/overView/overViewProduct'

const Products = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
        <Routes>
        <Route path='' element={<Product />} />
        {/* <Route path='/over-view-product' element={<OverViewProduct />} /> */}
      </Routes>
    </div>
  )
}

export default Products