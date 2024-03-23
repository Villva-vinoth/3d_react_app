import React from 'react'
import './careerGallery.css'
import image1 from '../../Assets/careers/Rectangle 57.png'
import image2 from '../../Assets/careers/Rectangle 56.png'
import image3 from '../../Assets/careers/Rectangle 57 (1).png'
import image4 from '../../Assets/careers/Rectangle 58.png'

const CareerGallery = () => {
  return (
    <div>
        
        <div className='career-gallery-display'>
            <div className='career-gallery-container-one'>
                <div className='career-gallery-container-one-content'>
                    <h2>Meet our team</h2>
                    <p>asefdghjkljhfgsafghjkfa</p>
                </div>
                <div className='career-gallery-container-one-img'>
                    <img src={image1} alt='' id='corner1'/>
                </div>
            </div>
            <div className='carreer-gallery-container-two'>
                <div className='career-gallery-container-two-content'>
                    <img src={image2} alt='' id='corner2' />
                    <img src={image3} alt='' />
                    <img src={image4} alt='' id='corner3'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CareerGallery