import React, { useState } from 'react'
import './Header.css'
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Logo from '../Assets/torus logo/Group 57.png'
const Header = () => {

    const [select,setSelect]=useState(0);
    const [hambarger,setHambarger]=useState(<RiMenuFill size={30}/>)
    const [zero,setZero]=useState(false)
    const handleHambarger =()=>{
      setZero(!zero)
        if(zero){
          setHambarger(<RiMenuFill size={30}/>)
        }
        else{
          setHambarger(<IoCloseSharp  size={20}/>)
        }
    }

  return (
    <div className='Header-display'>
        <picture className='header-picture'>
            <img src={Logo} alt='' className='Header-logo' />
        </picture>
        <div className='Header-inner'>
            <div className={`header-div ${select ===0 ? `header-select-div`:`header-hide-div`}`} id='Home' onClick={()=>setSelect(0)}>Home</div>
            <div className={`header-div ${select===1 ? `header-select-div`:`header-hide-div`}`} id='Product' onClick={()=>setSelect(1)}>Product</div>
            <div className={`header-div ${select===2 ? `header-select-div`:`header-hide-div`}`} id='Why Torus' onClick={()=>setSelect(2)}>Why Torus?</div>
            <div className={`header-div ${select===3 ? `header-select-div`:`header-hide-div`}`} id='Careers' onClick={()=>setSelect(3)}>Careers</div>
            <div className={`header-div ${select===4 ? `header-select-div`:`header-hide-div`}`} id='Other' onClick={()=>setSelect(4)}>Others</div>
            <div className={`header-div ${select===5 ? `header-select-div`:`header-hide-div`}`} id='Contact' onClick={()=>setSelect(5)}>Contact</div>
        </div>
        <div className='hambarger'>
          <div onClick={()=>handleHambarger()} className='hambarger-inner'>{hambarger}</div>
          <div className={zero ? 'header-hamberger' :"header-hamberger-hide"}>
          <div className='header-x' onClick={()=>handleHambarger()} >{hambarger}</div>

            <div onClick={()=>{handleHambarger(); setSelect(0)}}  className={`header-div ${select ===0 ? `header-select-div`:`header-hide-div`}`}>home</div>
            <div onClick={()=>{handleHambarger(); setSelect(1)}} className={`header-div ${select===1 ? `header-select-div`:`header-hide-div`}`}>product</div>
            <div onClick={()=>{handleHambarger(); setSelect(2)}} className={`header-div ${select===2 ? `header-select-div`:`header-hide-div`}`}>Why Torus?</div>
            <div onClick={()=>{handleHambarger(); setSelect(3)}} className={`header-div ${select===3 ? `header-select-div`:`header-hide-div`}`}>Careers</div>
            <div onClick={()=>{handleHambarger(); setSelect(4)}} className={`header-div ${select===4 ? `header-select-div`:`header-hide-div`}`}>Others</div>
            <div onClick={()=>{handleHambarger(); setSelect(5)}} className={`header-div ${select===5 ? `header-select-div`:`header-hide-div`}`}>Contact</div>
          </div>
        </div>
    </div>
  )
}

export default Header