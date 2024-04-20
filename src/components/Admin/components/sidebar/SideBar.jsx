import React, { useState } from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom'
import { FaChartBar } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { LiaComments } from "react-icons/lia";
const SideBar = ({sidebarRef}) => {
  const nav = useNavigate()
  const [active, SetActive] = useState("/admin");
  const setPath = (path) => {
    SetActive(path)
    nav(path)
     handleSideBarCloseAction()
  }

  console.log(window.location.pathname)

  const handleSideBarCloseAction =() => {
    sidebarRef.current.classList.remove("sidebar-close")
  }

  return (
    <div className='sideBar-main' ref={sidebarRef}>

      <div className='close-btn-sidebar' ><IoMdCloseCircle onClick={handleSideBarCloseAction}/></div>

      <div className={window.location.pathname === "/admin" ? "list list-active" : "list"} onClick={() => { setPath('/admin')}}>
        <span><FaChartBar /></span> <h4>Dashboard</h4>
      </div>
      <div className={window.location.pathname === "/admin/products" ? "list list-active" : window.location.pathname === "/admin/add-products" ? "list list-active" : "list"} onClick={() => { setPath('/admin/products') }}>
        <span><MdFormatListBulletedAdd /></span> <h4>Products</h4>
      </div>
      <div className={window.location.pathname === "/admin/blogs" ? "list list-active" : window.location.pathname === "/admin/add-blog" ? "list list-active" : "list"} onClick={() => { setPath('/admin/blogs') }}>
        <span><LiaComments/></span> <h4>Blogs</h4>
      </div>
      <div className={window.location.pathname === "/admin/testimonials" ? "list list-active" : window.location.pathname ==="/admin/add-testimonials" ? "list list-active": "list"} onClick={() => { setPath('/admin/testimonials') }}>
        <span><FaUsersBetweenLines/></span> <h4>Testimonials</h4>
      </div>
      <div className={window.location.pathname === "/admin/reports" ? "list list-active" : "list"} onClick={() => { setPath('/admin/reports') }}>
        <span><TbReportSearch /></span> <h4>Reports</h4>
      </div>

      <div className={window.location.pathname === "/admin/site-settings" ? "list list-active" : "list"} onClick={() => { setPath('/admin/site-settings') }}><span><IoSettingsOutline/></span><h4>Site settings</h4></div>

      <div className={window.location.pathname === "/admin/logout" ? "list list-active" : "list"} onClick={() => { setPath('') }}>
        <span><RiLogoutCircleLine /></span> <h4>Logout</h4>
      </div>


    </div>
  )
}

export default SideBar