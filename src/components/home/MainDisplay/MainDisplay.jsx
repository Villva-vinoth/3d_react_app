import React, { useEffect } from 'react'
import './MainDisplay.css'
import motor1 from '../../Assets/home/motor.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';


const MainDisplay = () => {
    useEffect(() => {
        Aos.init({
            duration: 600,
            // easing:"ease",
            delay: 100
        })
    })

    const parallax = useParallax({
        scale: [0.7,1.2,"easeInQuad"],
      });

  
    return (
        <div className='mainDisplay-display'>
            <div className='mainDisplay-picture' data-aos="zoom-in">
               
                    <Parallax >
                        <img src={motor1}   ref={parallax.ref} />
                    </Parallax>
             
            </div>

            <div className='mainDisplay-innerContent'>
                <div><label className='mainDisplay-topic' data-aos='fade-up'>AXIAL FLUX <br className='break-tag' /> MOTOR </label></div>
                <div className='mainDisplay-subtopic' data-aos='zoom-in'><h4>WHERE SPEED, RANGE AND AFFORDABILITY MEETS</h4></div>
                <div><p className='main-display-para' data-aos='zoom-out'>The world is moving towards sustainability. Efficient and Intelligent motors
                    will be at the heart of this transition powering everything from our vehicles
                    to industries and appliances.</p></div>
            </div>
        </div>
    )
}

export default MainDisplay