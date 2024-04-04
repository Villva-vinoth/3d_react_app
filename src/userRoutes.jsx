import React, { useState } from 'react'
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
const UserRoutes = () => {
    const [loginRoute, setLoginRoute] = useState(false);
  return (
    <div>
         <Header />
        <Routes>
       
        <Route path="" element={<Home set={setLoginRoute}/>} />
            <Route path="/product/*" element={<Products set={setLoginRoute}/>} />
            <Route path="/contact" element={<Contact set={setLoginRoute} />} />
            <Route path="/testimonials" element={<Testimonial set={setLoginRoute} />} />
            <Route path="/careers" element={<Careers set={setLoginRoute} />} />
            <Route path="/blogs/*" element={<Blogs set={setLoginRoute} />} />
            <Route path="/gallery" element={<Gallery  set={setLoginRoute}/>} />
            <Route path="/why-torus" element={<WhyTorus set={setLoginRoute}/>} />
         
        </Routes>
        <Footer />
    </div>
  )
}

export default UserRoutes