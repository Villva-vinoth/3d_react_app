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
            <div className='home-contact-container-one' >
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
            <div className='home-contact-container-two' >
                    <label>Message</label>
                    <textarea  placeholder='Enter your message'/>
                </div>
            </div>
            <div className='home-contact-container-three' >
                <label className='home-contact-container-three-label' style={{visibility:"hidden"}} >All fields are required <sup className='color-red'>*</sup></label>
                <div className='home-contact-submit-btn'>submit</div>
            </div>
        </div>
    )
}

export default Contact