import React from 'react'
import './adminHeader.css'
const AdminHeader = ({title}) => {
  return (
    <div className='Admin-header-container'>
        {title}
    </div>
  )
}

export default AdminHeader