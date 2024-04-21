import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom/dist'
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/others/testimonials/Testimonial";
import Careers from "./components/careers/Careers";
import Blogs from "./components/Blogs/Blog";
import Gallery from "./components/others/Gallery/Gallery";
import WhyTorus from "./components/whyTorus/WhyTorus";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {GET_ALL_TOGGLE} from './apiServices'
import axios from 'axios';

const UserRoutes = () => {
    const [loginRoute, setLoginRoute] = useState(false);

    const [blogs,setBlog] =useState('')
    const [testimonials,setTestimonials] =useState('')
   
    useEffect(()=>{
      const getAllShowcase = async ()=>{
        await axios.get(`${GET_ALL_TOGGLE}`).then((res)=>{
          console.log(res.data.data)
          const response = res.data.data
          console.log("res",response)
  
          const blogData = response.filter((itm)=>{
            return  itm.showcase_id===1
            })
            console.log(blogData)
          const testimonial = response.filter((itm)=>{
          return  itm.showcase_id===2
          })
          console.log(testimonial)
          setBlog(blogData)
          setTestimonials(testimonial)
        }).catch((error)=>{
          console.log(error)
        })
      }
      getAllShowcase()
    },[])

  return (
    <div>
         <Header  blog={blogs} testimonial={testimonials}/>
        <Routes>
       
        <Route path="" element={<Home set={setLoginRoute}/>} />
            <Route path="/product/*" element={<Products set={setLoginRoute}/>} />
            <Route path="/contact" element={<Contact set={setLoginRoute} />} />
            {testimonials[0]?.showcase_value ==1 ?<Route path="/testimonials" element={<Testimonial set={setLoginRoute}/>} />:('')}
            <Route path="/careers" element={<Careers set={setLoginRoute} />} />
            {blogs[0]?.showcase_value ==1 ?<Route path="/blogs/*" element={<Blogs set={setLoginRoute}  />} />:('')}
            <Route path="/gallery" element={<Gallery  set={setLoginRoute}/>} />
            <Route path="/why-torus" element={<WhyTorus set={setLoginRoute}/>} />
        </Routes>
        <Footer blog={blogs} testimonial={testimonials}/>
    </div>
  )
}

export default UserRoutes