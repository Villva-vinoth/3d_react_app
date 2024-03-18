import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import OverViewProduct from './productContent/overView/overViewProduct'

const Products = () => {
  return (
    <div>
        <Routes>
        <Route path='' element={<Product />} />
        <Route path='/over-view-product' element={<OverViewProduct />} />
      </Routes>
    </div>
  )
}

export default Products