import React, { useEffect } from 'react'
import CareerHeader from './careerHeader/CareerHeader'
import CareerGallery from './careerGallery/CareerGallery'
import WhyTorus from './Why torus/WhyTorus'
import CareerOppourtunity from './CareerOppourtunity/CareerOppourtunity'
import ResumeApply from './resumeApply/ResumeApply'
import CareerGalleryImage from './careerGallery/CareerGalleryImage'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Careers = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
      delay: 100
    })
  })
  return (
    <div>
        <CareerHeader  />
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <CareerGalleryImage  />
        </div>
        
        {/* <CareerGallery /> */}
        <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <WhyTorus  />
        </div>
 
      
        <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <CareerOppourtunity  />
        </div>
        <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            
        <ResumeApply />
        </div>
 
  
    </div>
  )
}

export default Careers