import React, { useState } from 'react'
import './Header.css'
import { RiMenuFill } from "react-icons/ri";
import  img  from "../../imgs/sesami.png"
import { RiMenu5Fill } from "react-icons/ri";

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
          setHambarger(<RiMenu5Fill size={30}/>)
        }
    }

  return (
    <div className='Header-display'>
        <picture className='header-picture'>
            <img src={img} alt='' className='Header-logo' style={{'width': '270px', 'height': '90px'}} />
        </picture>
        <div className='Header-inner'>
            <div className={`header-div ${select ===0 ? `header-select-div`:`header-hide-div`}`} id='Home' onClick={()=>setSelect(0)}>SESAMI BUISNESS NETWORK</div>
            <div className={`header-div ${select===1 ? `header-select-div`:`header-hide-div`}`} id='Product' onClick={()=>setSelect(1)}>SOLUTIONS</div>
            <div className={`header-div ${select===2 ? `header-select-div`:`header-hide-div`}`} id='Why Torus' onClick={()=>setSelect(2)}>SERVICES</div>
            <div className={`header-div ${select===3 ? `header-select-div`:`header-hide-div`}`} id='Careers' onClick={()=>setSelect(3)}>COMPANY</div>
            <div className={`header-div ${select===4 ? `header-select-div`:`header-hide-div`}`} id='Other' onClick={()=>setSelect(4)}>CONTACT US</div>

        </div>
        <div className='hambarger'>
          <div onClick={()=>handleHambarger()} className='hambarger-inner'>{hambarger}</div>
          <div className={zero ? 'header-hamberger' :"header-hamberger-hide"}>
            <div onClick={()=>{handleHambarger(); setSelect(1)}} className={`header-div ${select===1 ? `header-select-div`:`header-hide-div`}`}>SESAMI BUISNESS NETWORK</div>
            <div onClick={()=>{handleHambarger(); setSelect(2)}} className={`header-div ${select===2 ? `header-select-div`:`header-hide-div`}`}>SOLUTIONS</div>
            <div onClick={()=>{handleHambarger(); setSelect(3)}} className={`header-div ${select===3 ? `header-select-div`:`header-hide-div`}`}>SERVICES</div>
            <div onClick={()=>{handleHambarger(); setSelect(4)}} className={`header-div ${select===4 ? `header-select-div`:`header-hide-div`}`}>COMPANY</div>
            <div onClick={()=>{handleHambarger(); setSelect(5)}} className={`header-div ${select===5 ? `header-select-div`:`header-hide-div`}`}>CONTACT US</div>
          </div>
        </div>
    </div>
  )
}

export default Header