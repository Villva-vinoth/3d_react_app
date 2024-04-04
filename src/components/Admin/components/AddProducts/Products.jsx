import React from 'react'
import './addProducts.css'
import { useNavigate } from 'react-router-dom/dist'
const Products = () => {
  const nav=useNavigate()
  return (
    <div className='admin-products'>
      <div className='wrapper-container'>
        <div className='admin-product-header'>   <h2>Products</h2> <button onClick={()=>{nav("/admin/add-products")}}>Add products</button></div>
     
      </div>
    </div>
  )
}

export default Products