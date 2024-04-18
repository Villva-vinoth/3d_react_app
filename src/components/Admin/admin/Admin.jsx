import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import SideBar from '../components/sidebar/SideBar'
import './admin.css'
import AdminHeader from '../components/Header/AdminHeader'
import Products from '../components/AddProducts/Products'
import AddProducts from '../components/AddProducts/AddProducts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from '../components/Blog/Blogs'
import AddBlog from '../components/Blog/AddBlog'
import Report from '../components/Reports/Report'
import SiteSettings from '../components/SiteSetting/SiteSettings'

const Admin = ({set}) => {
    useEffect(()=>{
        set(true)
    },[])
  return (
    <div className='admin-main-console'>
      <ToastContainer
      
      />
        <AdminHeader  title='torus'/>
        <div className='admin-console'>
        <SideBar/>
       <div className='admin-display'>
       <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/add-blog' element={<AddBlog/>} />
            <Route path='/reports' element={<Report/>} />
            <Route path='/site-settings' element={<SiteSettings/>} />
        </Routes>
       </div>
        </div>
      
    </div>
  )
}

export default Admin