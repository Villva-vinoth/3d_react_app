import React, { useState } from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom'
import { FaChartBar } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
const SideBar = () => {
    const nav = useNavigate()
    const [active, SetActive] =useState("/admin");
    const setPath=(path)=>{
     SetActive(path)
     nav(path)
    }
  return (
    <div className='sideBar-main'>
      
      <div className={window.location.pathname === "/admin" ? "list list-active" : "list"} onClick={() => {setPath('/admin') }}>
        <span><FaChartBar /></span> <h4>Dashboard</h4>
      </div>
      <div className={window.location.pathname  === "/admin/products" ? "list list-active" : "list"} onClick={() => { setPath('/admin/products')}}>
        <span><MdFormatListBulletedAdd /></span> <h4>Products</h4>
      </div>
      <div className={window.location.pathname  === "/admin/logout" ? "list list-active" : "list"} onClick={() => {setPath('') }}>
        <span><RiLogoutCircleLine /></span> <h4>Logout</h4>
      </div>
    </div>
  )
}

export default SideBar