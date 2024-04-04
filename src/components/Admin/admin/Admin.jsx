import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import SideBar from '../components/sidebar/SideBar'
import './admin.css'
import AdminHeader from '../components/Header/AdminHeader'
import Products from '../components/AddProducts/Products'
import AddProducts from '../components/AddProducts/AddProducts'

const Admin = ({set}) => {
    useEffect(()=>{
        set(true)
    },[])
  return (
    <div className='admin-main-console'>
        <AdminHeader  title='torus'/>
        <div className='admin-console'>
        <SideBar/>
       <div className='admin-display'>
       <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/add-products' element={<AddProducts />} />
        </Routes>
       </div>
        </div>
    
    </div>
  )
}

export default Admin