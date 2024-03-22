import React from 'react'
import './parallaxContainer.css'
import image1 from '../../Assets/home/parallax/Frame 192.png'
const ParallaxContainer = () => {
  return (
    <div  className='parallax-container-display'>
        <img src={image1} alt=''/>
    </div>
  )
}

export default ParallaxContainer