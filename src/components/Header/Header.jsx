import React, { useEffect, useState } from 'react'
import './Header.css'
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Logo from '../Assets/torus logo/Group 57.png'
import {  useNavigate } from 'react-router-dom';
const Header = () => {

  const nav= useNavigate()  
  const [hambarger, setHambarger] = useState(<RiMenuFill size={30} />)
  const [zero, setZero] = useState(false)

  const handleHambarger = () => {
    setZero(!zero)
    if (zero) {
      setHambarger(<RiMenuFill size={30} />)
    }
    else {
      setHambarger(<IoCloseSharp size={20} />)
    }
  }

  const handleImage =()=>{
      nav('/login')
  }

  return (
    <div className='Header-display'>
      <picture className='header-picture'>
      {/* onDoubleClick={()=>handleImage()} */}
        <img src={Logo} alt='' className='Header-logo'  />
      </picture>
      <div className='Header-inner'>
  
        <div className={`header-div ${ window.location.pathname === '/' ? `header-select-div` : `header-hide-div`}`} id='Home' onClick={() => {nav('/')}}>Home</div>
        <div className={`header-div ${ window.location.pathname === '/product' ? `header-select-div` : `header-hide-div`}`} id='Product' onClick={() => {nav('/product')}}>Product</div>
        <div className={`header-div ${window.location.pathname === '/why-torus' ? `header-select-div` : `header-hide-div`}`} id='Why Torus' onClick={() => {nav('/why-torus')}}>Why Torus?</div>
        <div className={`header-div ${ window.location.pathname === '/careers' ? `header-select-div` : `header-hide-div`}`} id='Careers' onClick={() => {nav('/careers')}}>Careers</div>
        <div className={`header-div others-div-header `} id='Other' >Others
          <div className={`drop-down`}>
            <div className={`drop-down-div ${window.location.pathname === '/gallery' ? `drop-select-div` : `header-hide-div`}`} id='gallery' onClick={() =>{nav('/gallery')}}> Gallery</div>
            <div className={`drop-down-div ${window.location.pathname === '/blog' ? `drop-select-div` : `header-hide-div`}`} id='Blog' onClick={() => {nav('/blog')}}>Blog</div>
            <div className={`drop-down-div ${window.location.pathname === '/testimonial' ? `drop-select-div` : `header-hide-div`}`} id='Testimonial' onClick={() => {nav('/testimonial')}}>Testimonial</div>
          </div>
        </div>
        <div className={`header-div ${window.location.pathname === '/contact' ? `header-select-div` : `header-hide-div`}`} id='Contact' onClick={() => {nav('/contact')}}>Contact</div>
      </div>
      <div className='hambarger'>
        <div onClick={() => handleHambarger()} className='hambarger-inner'>{hambarger}</div>
        <div className={zero ? 'header-hamberger' : "header-hamberger-hide"}>
          <div className='header-x' onClick={() => handleHambarger()} >{hambarger}</div>

          <div onClick={() => { handleHambarger();nav('/') }} className={`header-div ${window.location.pathname === '/' ? `header-select-div` : `header-hide-div`}`}>home</div>
          <div onClick={() => { handleHambarger();nav('/product') }} className={`header-div ${window.location.pathname === '/product' ? `header-select-div` : `header-hide-div`}`}>product</div>
          <div onClick={() => { handleHambarger();nav('/why-torus') }} className={`header-div ${window.location.pathname === '/why-torus' ? `header-select-div` : `header-hide-div`}`}>Why Torus?</div>
          <div onClick={() => { handleHambarger();nav('/careers') }} className={`header-div ${window.location.pathname === 'careers' ? `header-select-div` : `header-hide-div`}`}>Careers</div>
          {/* <div className='header-div other-div-ham'>Others */}
            {/* <div className={`ham-drop-down`}> */}
              <div className={`header-div ${ window.location.pathname === '/gallery' ? `header-select-div` : `header-hide-div`}`} id='gallery' onClick={() => {  handleHambarger();nav('/gallery') }}> Gallery</div>
              <div className={`header-div ${ window.location.pathname === '/blog' ? `header-select-div` : `header-hide-div`}`} id='Blog' onClick={() => {  handleHambarger();nav('/blog') }}>Blog</div>
              <div className={`header-div ${ window.location.pathname === '/testimonial' ? `header-select-div` : `header-hide-div`}`} id='Testimonial' onClick={() => {  handleHambarger();nav('/testimonial') }}>Testimonial</div>
            {/* </div> */}
          {/* </div> */}

          <div onClick={() => { handleHambarger();nav('/contact') }} className={`header-div ${window.location.pathname === '/contact' ? `header-select-div` : `header-hide-div`}`}>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Header