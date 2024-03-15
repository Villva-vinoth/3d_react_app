import React from 'react'
import './MainDisplay.css'
import motor1 from '../../Assets/mainpageMotor.png'
const MainDisplay = () => {
    return (
        <div className='mainDisplay-display'>
            <picture className='mainDisplay-picture'>
                <img src={motor1} />
            </picture>
            <div className='mainDisplay-innerContent'>
                <div><label className='mainDisplay-topic'>AXIAL FLUX <br className='break-tag'/> MOTOR </label></div>
                <div><h4>WHERE SPEED, RANGE AND AFFORDABILITY MEETS</h4></div>
                <div><p className='main-display-para'>The world is moving towards sustainability. Efficient and Intelligent motors 
will be at the heart of this transition powering everything from our vehicles 
to industries and appliances.</p></div>
            </div>
        </div>
    )
}

export default MainDisplay