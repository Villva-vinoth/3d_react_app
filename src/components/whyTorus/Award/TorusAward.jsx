import React, { useEffect, useState } from 'react'
import './award.css'
import { award } from './awardData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { GET_ALL_AWARDS } from '../../../apiServices';
const TorusAward = () => {


  const [awards,setAwards]= useState([])

  useEffect(()=>{
    const getAward = async()=>{
      await axios.get(GET_ALL_AWARDS).then((res)=>{
        console.log(res.data.data)
        setAwards(res.data.data)
              }).catch((error)=>{
                console.log(error)
              })
    }
    getAward()
  },[])

  const PrevButton = ({ onClick, currentSlide, style, ...props }) => {
    return (
      <div
        onClick={onClick}
        style={{
          cursor: 'pointer',
          boxShadow: "0 0 5px rgb(207, 207, 207)",
          backgroundColor: "white",
          width:"20px",
          textAlign:"center",
          position:"absolute",
          top:"40%",
          zIndex:"10",
          left:"0",
          ...style 
        }}
        {...props}
        className={`award-next ${currentSlide === 0 ? "slick-disabled" : ""}`}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
      >
        {'<'}
      </div>
    );
  };
  
  const NextButton = ({ onClick, currentSlide, slideCount, style, ...props }) => {
    return (
      <div
        onClick={onClick}
        style={{
          cursor: 'pointer',
          boxShadow: "0 0 5px rgb(207, 207, 207)",
          backgroundColor: "white",
          width:"max-content",
          width:"20px",
          textAlign:"center",
          position:"absolute",
          top:"40%",
          right:"0",
          zIndex:"10",
          ...style
        }}
        {...props}
        className={`award-prev ${currentSlide === slideCount - 1 ? "slick-disabled" : ""}`}
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
      >
        {'>'}
      </div>
    );
  };

  var settings = {
    dots: false,         
    infinite: true,       
    autoplay: true,       
    autoplaySpeed: 2000,  
    speed: 500,           
    slidesToShow: 4,      
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow:<NextButton />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]

  };
  return (
    <div className='Award-display'>
      <h2 >AWARDS & RECOGNITION </h2>
      <div className='Awards-content'>
        <Slider {...settings}>
          {
            awards.map((item, index) => {
              return (
                <div key={index} className='award-pic'>
                  <img src={item.awards_image} alt='' />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default TorusAward