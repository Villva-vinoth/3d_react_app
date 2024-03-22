import React from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Benefits from './Benefits/Benefits'
import ProductCarosel from './productCarosel/ProductCarosel'
import ParallaxContainer from './parallaxContainer/ParallaxContainer'
const Home = () => {
  return (
    <div className='Home-display'>
        <MainDisplay />
        <ParallaxContainer />
        <Bussinessinfo />
        <Benefits />
        <ProductCarosel />
    </div>
  )
}

export default Home