import React from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Products from './products/Products'
import Benefits from './Benefits/Benefits'
const Home = () => {
  return (
    <div className='Home-display'>
        <MainDisplay />
        <Bussinessinfo />
        <Benefits />
        <Products />
    </div>
  )
}

export default Home