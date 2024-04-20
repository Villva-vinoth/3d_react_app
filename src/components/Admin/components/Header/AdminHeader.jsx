import React from 'react'
import './adminHeader.css'
import logo from "../../../Assets/torus logo/Group 57.png"
import { FaBars } from "react-icons/fa";
const AdminHeader = ({title,handelSideClose}) => {
  return (
    <div className='Admin-header-container'>
        <img src={logo}/>
        <span  className="NavBar-admin" onClick={()=>{handelSideClose()}}><FaBars/></span>
    </div>
  )
}

export default AdminHeader