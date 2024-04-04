import React from 'react'
import './adminHeader.css'
import logo from "../../../Assets/torus logo/Group 57.png"
const AdminHeader = ({title}) => {
  return (
    <div className='Admin-header-container'>
        <img src={logo}/>
    </div>
  )
}

export default AdminHeader