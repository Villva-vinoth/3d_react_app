import React, { useEffect, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
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
import Testimonials from '../components/Testimonials/Testimonials'
import AddTestimonials from '../components/Testimonials/AddTestimonials'
import Awards from '../components/Awards & Recogination/Awards'
import AddImage from '../components/Awards & Recogination/AddImage'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { VERFIY_USER } from '../../../apiServices'

const Admin = ({set}) => {
  const nav = useNavigate()
  const [cookies,setCookie,removeCookie]=useCookies([])
    useEffect(()=>{
        set(true)
    },[])
    useEffect (()=>{
          
          const token=cookies.jwtToken
          const verifyToken =async () =>{
            if(!cookies.jwtToken)
          {
            nav("/login")
          }
             await axios.post(VERFIY_USER,{},{
              withCredentials:true,
              headers: {
              Authorization: `Bearer ${token}`
            }}).then((res)=>{
                    
             }).catch((err)=>{
              console.log("error",err)
              if(err.response.data.success == 0){
                removeCookie('jwtToken')
                nav("/login")
              }
              
             })
          }
          verifyToken();
    },[])
    const sidebarRef=useRef();
    const handelSideClose =() =>{
          sidebarRef.current.classList.add("sidebar-close")
    }
  return (
    <div className='admin-main-console'>
      <ToastContainer/>
        <AdminHeader  title='torus' handelSideClose={handelSideClose}/>
        <div className='admin-console'>
        <SideBar sidebarRef={sidebarRef}/>
       <div className='admin-display'>
       <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/add-blog' element={<AddBlog/>} />
            <Route path='/reports' element={<Report/>} />
            <Route path='/site-settings' element={<SiteSettings/>} />
            <Route path='/testimonials' element={<Testimonials/>} />
            <Route path='/add-testimonials' element={<AddTestimonials/>} />
            <Route path='/awards' element={<Awards/>} />
            <Route path='/add-awards' element={<AddImage/>} />

        </Routes>
       </div>
        </div>
      
    </div>
  )
}

export default Admin