import React from 'react'
import { useNavigate } from 'react-router-dom'


const Blogs = () => {
    const nav=useNavigate();
  return (
    <div className='admin-products'>
    <div className='wrapper-container'>
      <div className='admin-product-header'>
        <h2>Blogs</h2>
        <button onClick={()=>{nav("/admin/add-blog")}}>Create New</button>
      </div>
      </div>
      </div>
  )
}

export default Blogs