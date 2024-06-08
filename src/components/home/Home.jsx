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
import { ParallaxProvider } from 'react-scroll-parallax'
const Home = ({set}) => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease",
      delay: 100
    })
  })
  useEffect(()=>{
    set(false)
  },[])

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [])
  return (
    <ParallaxProvider>  
        <div className='Home-display'>
      <div ><MainDisplay /></div>
      {/* <div data-aos='fade-in'><ParallaxContainer /></div> */}
      <div ><Bussinessinfo /></div>
      <div ><Benefits /></div>
      <div ><ProductCarosel /></div>
      <div ><Contact  data-aos="fade-up" data-aos-anchor-placement="top-bottom" /></div>
    </div> 
    </ParallaxProvider>


  )
}

export default Home

