import React, { useEffect } from 'react'
import './MainDisplay.css'
import motor1 from '../../Assets/mainpageMotor.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const MainDisplay = () => {
    useEffect(()=>{
        Aos.init({
            duration: 600,
            easing:"ease",
            delay:100
          })
    })
    return (
        <div className='mainDisplay-display'>
            <div className='mainDisplay-picture' data-aos="zoom-in">
                <img src={motor1} />
            </div>
            
            <div className='mainDisplay-innerContent'>
                <div><label className='mainDisplay-topic'>AXIAL FLUX <br className='break-tag'/> MOTOR </label></div>
                <div className='mainDisplay-subtopic'><h4>WHERE SPEED, RANGE AND AFFORDABILITY MEETS</h4></div>
                <div><p className='main-display-para'>The world is moving towards sustainability. Efficient and Intelligent motors 
will be at the heart of this transition powering everything from our vehicles 
to industries and appliances.</p></div>
            </div>
        </div>
    )
}

export default MainDisplay