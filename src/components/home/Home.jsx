import React from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Products from './products/Products'
import Landing from './MainDisplay/Landing'
const Home = () => {
  return (
    <div className='Home-display'>
      <Landing />
        <MainDisplay />
        <Bussinessinfo />
        <Products />
    </div>
  )
}

export default Home