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
        scale: [0.9,1.2,"easeInQuad"],
      });



  
    return (
        <div className='mainDisplay-display'>
            <div className='mainDisplay-picture' data-aos="zoom-in">
               
                    <Parallax >
                        <img src={motor1}   ref={parallax.ref} />
                    </Parallax>
             
            </div>

            <div className='mainDisplay-innerContent'>
                <div><label className='mainDisplay-topic' data-aos='fade-up'>Torus AXIAL FLUX MOTOR </label></div>
                <div className='mainDisplay-subtopic' data-aos='zoom-in'><h4>WHERE SPEED, RANGE AND AFFORDABILITY MEETS</h4></div>
                <div><p className='main-display-para' data-aos='zoom-out'>
                    {/* The world is moving towards sustainability, efficient and intelligent motors
                    will be at the heart of this transition powering everything from our vehicles
                    to industries and appliances. */}
                    At Torus, we manufacture axial flux motors and controllers
                     designed for compactness, lightweight, and high-power density.
                      Our products deliver exceptional efficiency and performance across
                       a wide range, featuring high regenerative capabilities. Discover the future
                     of motor technology with Torus, where innovation meets excellence.
                    </p></div>
            </div>
        </div>
    )
}

export default MainDisplay