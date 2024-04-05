import React, { useEffect } from 'react'
import CareerHeader from './careerHeader/CareerHeader'
import CareerGallery from './careerGallery/CareerGallery'
import WhyTorus from './Why torus/WhyTorus'
import CareerOppourtunity from './CareerOppourtunity/CareerOppourtunity'
import ResumeApply from './resumeApply/ResumeApply'

const Careers = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
        <CareerHeader />
        <CareerGallery />
        <WhyTorus />
        <CareerOppourtunity />
        <ResumeApply />
    </div>
  )
}

export default Careers