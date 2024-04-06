import React from 'react'

import image1 from '../../Assets/careers/Rectangle 57.png'
import image2 from '../../Assets/careers/Rectangle 56.png'
import image3 from '../../Assets/careers/Rectangle 57 (1).png'
import image4 from '../../Assets/careers/Rectangle 58.png'
import './careerGallery.css'

const CareerGalleryImage = () => {
  return (
    <div className='grid-container' >
        <div className='grid-wrapper'>

            <div className='grid-items'>
               <h2>Meet our team</h2>
                        <p>Get to Know the Faces Behind Torus. Our diverse team brings together a wealth of experience, expertise, and passion for high efficient Powertrain system for EV industry. From our visionary leaders to our dedicated professionals, each member of our team plays a pivotal role in driving our company forward. Discover the individuals shaping our success and driving innovation every day.</p>
            </div>
            <div className='grid-items'>
            <img src={image1} alt='' />
            </div>

            <div className='grid-items'>
                <img src={image2} alt=''/>
        
            </div>
            <div className='grid-items'>
                <img src={image3} alt=''/>
        
            </div>
            <div className='grid-items'>
                <img src={image4} alt=''/>
        
            </div>

        </div>
    </div>
  )
}

export default CareerGalleryImage