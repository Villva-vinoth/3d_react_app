import React from 'react'
import './careerGallery.css'
import image1 from '../../Assets/careers/Rectangle 57.png'
import image2 from '../../Assets/careers/Rectangle 56.png'
import image3 from '../../Assets/careers/Rectangle 57(1).png'
import image4 from '../../Assets/careers/Rectangle 58.png'

const CareerGallery = () => {
  return (
    <div>
        
        <div className='career-gallery-display'>
            <div className='career-gallery-container-one'>
                <div className='career-gallery-container-one-content'>
                    <h2>saefg</h2>
                    <p>asefdghjkljhfgsafghjkfa</p>
                </div>
                <picture>
                    <img src={image1} alt='' />
                </picture>
            </div>
            <div className='carreer-gallery-container-two'>
                <picture className='career-gallery-container-two-content'>
                    <img src={image2} alt='' />
                    <img src={image3} alt='' />
                    <img src={image4} alt='' />
                </picture>
            </div>
        </div>

    </div>
  )
}

export default CareerGallery