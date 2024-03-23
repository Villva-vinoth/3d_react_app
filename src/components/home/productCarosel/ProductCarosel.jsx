import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ProductCarosel.css'
import prev from '../../Assets/prevArrow.png'
import image from '../../Assets/home/productCaroselimg/Rectangle 61.png'
import { PiStarFourFill } from "react-icons/pi";
import Aos from 'aos'
import 'aos/dist/aos.css'
const PrevButton = ({ ...props }) => {
  return (
    <img src={prev} {...props} style={{ boxShadow: "0 0 5px rgb(207, 207, 207)", backgroundColor: "white" }} />
  )
}

const NextButton = ({ ...props }) => {
  return (
    <img src={prev} {...props} style={{ boxShadow: "0 0 5px rgb(207, 207, 207)", backgroundColor: "white" }} />
  )
}
const ProductCarosel = () => {

  useEffect(()=>{
    Aos.init({
      duration: 600,
      easing: "ease",
      delay: 100
  })
  })

  const data = [
    { img: image, name: "Robotics", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam.", ul: ['Energy Efficient', 'High Torque Low Speed', 'Scalability and Adaptability', 'Reduced Heat Generation', 'Compact Size', 'Highly Efficient'] },
    { img: image, name: "Electrical Cars", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam.", ul: ['Energy Efficient', 'High Torque Low Speed', 'Reduced Heat Generation', 'Compact Size', 'Highly Efficient'] },
    { img: image, name: "Robotics", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam.", ul: ['Energy Efficient', 'High Torque Low Speed', 'Scalability and Adaptability', 'Reduced Heat Generation', 'Compact Size', 'Highly Efficient'] },
    { img: image, name: "Electrical Cars", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam.", ul: ['Energy Efficient', 'High Torque Low Speed', 'Scalability and Adaptability', 'Reduced Heat Generation', 'Compact Size', 'Highly Efficient'] },
  ];
  var settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    // prevArrow: <PrevButton />,
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
              <div className='product-carosel-container' key={index}>
                <div className='product-carosel-container-picture' data-aos='zoom-in-left'>
           
                  <img src={item.img} alt='' />
              
                </div>
                <h3 data-aos='zoom-in-down'>{item.name}</h3>
                <div className='product-carosel-in-details'>
                  <ul>

                    {
                      item.ul.map((items) => {
                        return (
                          <li data-aos='zoom-in-up'><span ><PiStarFourFill color='black'  id="star-icon"/></span>{items}</li>
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