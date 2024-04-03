import React from 'react'
import userline from '../../../Assets/underLine.png'
import './testimonialHeader.css'
const TestimonialHeader = () => {
  return (
    <div className="Testimonial-header-display">
    <div className="Testimonial-header-topic">
     <h2> Testimonials  </h2>
      {/* <img src= {userline} alt="loading"/> */}
    </div>
    <div className="Testimonial-header-description">
      <p>
      Benefits of TAFM Torus Axial Flux Motors deliver unparalleled power density, boasting a motor design that is at least 50% lighter, 15% more efficient, and 
exceptionally cost-effective. Application Benefits of using TAFM When integrated into automotive vehicles, Torus Axial Flux Motors (TAFM) present a multitude 
of advantages, emphasizing efficiency and lightweight design. Notably, our motors boast the highest regenerative braking potential, enabling vehicles to 
achieve up to 10% greater speed and distance. </p>
    </div>
  </div>
  )
}

export default TestimonialHeader