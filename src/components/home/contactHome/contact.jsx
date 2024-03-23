import React, { useEffect } from 'react'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
    useEffect(()=>{
        Aos.init({
            duration: 600,
            easing:"ease",
            delay: 100
          })
    })
    return (
        <div className='home-contact-us-display-form'>
            <div className='home-contact-container-one' data-aos='fade-up' data-aos-duration='3000'>
                <div className='home-contact-content'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name'/>
                </div>
                <div className='home-contact-content'> 
                    <label>Email</label>
                    <input type='text' placeholder='Enter your email'/>
                </div>
            </div>
            <div>
            <div className='home-contact-container-two' data-aos='fade-down' data-aos-duration='3000'>
                    <label>Message</label>
                    <textarea  placeholder='Enter your message'/>
                </div>
            </div>
            <div className='home-contact-container-three' data-aos='fade-up' data-aos-duration='3000'>
                <label className='home-contact-container-three-label' >All fields are required <sup className='color-red'>*</sup></label>
                <div className='home-contact-submit-btn'>submit</div>
            </div>
        </div>
    )
}

export default Contact