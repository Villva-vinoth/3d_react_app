import React, { useState } from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom'
import { FaChartBar } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
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
      <div className={window.location.pathname  === "/admin/products" ? "list list-active":window.location.pathname  === "/admin/add-products" ? "list list-active" : "list" } onClick={() => { setPath('/admin/products')}}>
        <span><MdFormatListBulletedAdd /></span> <h4>Products</h4>
      </div>
      <div className={window.location.pathname  === "/admin/blogs" ? "list list-active" : window.location.pathname  === "/admin/add-blog" ? "list list-active" : "list"} onClick={() => {setPath('/admin/blogs') }}>
        <span><SiMicrodotblog/></span> <h4>Blogs</h4>
      </div>
      <div className={window.location.pathname  === "/admin/reports" ? "list list-active" : "list"} onClick={() => {setPath('/admin/reports') }}>
        <span><TbReportSearch/></span> <h4>Reports</h4>
      </div>

      <div className='list'><span><IoSettings/></span><h4>Site settings</h4></div>
      
      <div className={window.location.pathname  === "/admin/logout" ? "list list-active" : "list"} onClick={() => {setPath('') }}>
        <span><RiLogoutCircleLine /></span> <h4>Logout</h4>
      </div>
    </div>
  )
}

export default SideBar