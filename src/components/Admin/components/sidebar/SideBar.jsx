import React from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom'
const SideBar = () => {
    const nav = useNavigate()
  return (
    <div className='sideBar-main'>
       <ul className='sidebar-ul'>
            <li onClick={()=>{nav('/admin')}}><span></span>Dashboard</li>
            <li onClick={()=>nav('/admin/add-product')}><span></span>Add Product</li>
        </ul> 
    </div>
  )
}

export default SideBar