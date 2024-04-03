import React from 'react'
import CareerHeader from './careerHeader/CareerHeader'
import CareerGallery from './careerGallery/CareerGallery'
import WhyTorus from './Why torus/WhyTorus'
import CareerOppourtunity from './CareerOppourtunity/CareerOppourtunity'
import ResumeApply from './resumeApply/ResumeApply'

const Careers = () => {
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