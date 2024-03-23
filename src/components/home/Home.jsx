import React, { useEffect } from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Benefits from './Benefits/Benefits'
import ProductCarosel from './productCarosel/ProductCarosel'
import ParallaxContainer from './parallaxContainer/ParallaxContainer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contact from './contactHome/contact'
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing:"ease",
      delay: 100
    })
  })
  return (
    <div className='Home-display'>
      <div ><MainDisplay /></div>
      <div data-aos='fade-in'><ParallaxContainer /></div>
      <div ><Bussinessinfo /></div>
      <div ><Benefits /></div>
      <div ><ProductCarosel /></div>
      <div > <Contact /></div>
    </div>
  )
}

export default Home