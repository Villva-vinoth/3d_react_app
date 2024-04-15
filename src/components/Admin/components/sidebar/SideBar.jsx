import React from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom'
import { FaChartBar } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
const SideBar = () => {
    const nav = useNavigate()
  return (
    <div className='sideBar-main'>
      
      <div className='list' onClick={()=>{nav("/admin")}}> <span><FaChartBar/></span> Dashboard</div>
      <div className='list'onClick={()=>{nav("/admin/products")}}> <span><MdFormatListBulletedAdd/></span>Products</div>
    </div>
  )
}

export default SideBar