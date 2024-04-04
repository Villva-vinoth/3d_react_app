import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import SideBar from '../components/sidebar/SideBar'
import './admin.css'
const Admin = ({set}) => {
    useEffect(()=>{
        set(true)
    },[])
  return (
    <div>
        <SideBar />
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add-product' element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default Admin