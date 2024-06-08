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
      <p className='poppins'>
      Testimonials of satisfied clients who have experienced the transformative power of Torus Axial Flux Motors (TAFM). Explore their stories and learn how our motors have enhanced their applications’ performance with unmatched power density, efficiency, and performance. Join our community of happy customers who trust Torus for their electric vehicle powertrain solutions.
</p>
    </div>
  </div>
  )
}

export default TestimonialHeader