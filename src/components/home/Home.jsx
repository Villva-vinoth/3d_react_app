import React from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Products from './products/Products'
import Benefits from './Benefits/Benefits'
import ProductCarosel from './productCarosel/ProductCarosel'
const Home = () => {
  return (
    <div className='Home-display'>
        {/* <MainDisplay /> */}
        {/* <Bussinessinfo /> */}
        {/* <Benefits /> */}
        <ProductCarosel />
    </div>
  )
}

export default Home