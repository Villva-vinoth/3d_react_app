import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ProductCarosel.css'
import prev from '../../Assets/prevArrow.png'
import image from '../../Assets/home/productCaroselimg/ev.png'
import image1 from '../../Assets/home/productCaroselimg/robotic.png'
import image2 from '../../Assets/home/productCaroselimg/industrial.png'
import image3 from '../../Assets/home/productCaroselimg/turbine.png'
import image4 from '../../Assets/home/productCaroselimg/waterpump.png'

import { PiStarFourFill } from "react-icons/pi";
import Aos from 'aos'
import 'aos/dist/aos.css'
const PrevButton = ({ ...props }) => {
  return (
    <img src={prev} {...props} style={{ boxShadow: "0 0 5px rgb(207, 207, 207)", backgroundColor: "white",zIndex:"1" }} />
  )
}

const NextButton = ({ currentSlide, slideCount, ...props }) => {
  return (
    <img src={prev} {...props} style={{ boxShadow: "0 0 5px rgb(207, 207, 207)", backgroundColor: "white" }} className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    } aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false} />
  )
}
const ProductCarosel = () => {

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease",
      delay: 100
    })
  })

  const data = [
    {
      img:image,
      name:"EV",
      ul:['Compact design suitable for space-limited EVs','Higher power density for improved acceleration and performance','High efficiency for maximizing driving range','More efficient cooling compared to radial flux motors','Effective regenerative braking capability','Cost-effective manufacturing processes','Potential for weight reduction in vehicles','Flexibility in integration and mounting orientations']
     },
     { img: image4, name: "Water Pump" ,
      ul: ['Pumps in rural areas face voltage fluctuations and mobility challenges', `Torus Axial Flux Motor's lightweight design facilitates easy portability`, 'Achieved one-third reduction in overall system weight', 'Ideal for mobile use in rural areas', 'In urban settings, high-efficiency motors like Torus Axial Flux ensure power savings during operation',] },
      { img: image2, name: "Industries" , 
        ul: ['Industry shift towards higher efficiency motors like IE2 standards for power conservation', 'Torus Axial Flux Motors offer 90% efficiency in S1 duty cycles', 'Significantly reduces power consumption, ideal for energy-conscious applications',] },
    { img: image1, name: "Robotics" ,
     ul: ['Tailored for AMR and AGV applications', 'Compact form factor enhances mobility', 'Bundled components include EM Brake, Encoder, Gearbox, and wheel', 'Ensures a comprehensive solution for enhanced maneuverability'] },
    { img: image3, name: "Power Generation" , 
    ul: ['Exceptional operational efficiency exceeding 94% ', 'Outperforms conventional models in power generation', 'Significantly reduced size and weight, up to 50% less', 'Facilitates effortless installation atop wind turbines', 'Ensures reliable and stable power production '] },
    
    
     
  ];

  

  var settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  };



  return (
    <div className='product-carosel-display'>
      <h2 className='product-carosel-header' data-aos='fade-in'>Application Supported By us</h2>
      <Slider {...settings}>
        {
          data.map((item, index) => {
            return (
              <div className='product-carosel-container' key={index}  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='product-carosel-container-picture' >

                  <img src={item.img} alt='' />

                </div>
                <h3  >{item.name}</h3>
                <div className='product-carosel-in-details'>
                  <ul >

                    {
                      item.ul.map((items, indexes) => {
                        return (
                          <li  key={indexes}><span ><PiStarFourFill color='black' id="star-icon" size={12}/></span>{items}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ProductCarosel