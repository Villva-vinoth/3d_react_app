import React, { useEffect } from 'react'
import './testimonial.css'
import TestimonialHeader from './testimonialHeader/TestimonialHeader'
import TestimonialCarosel from './testimonialCarosel/TestimonialCarosel'
const Testimonial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
        <TestimonialHeader />
        <TestimonialCarosel />
    </div>
  )
}

export default Testimonial