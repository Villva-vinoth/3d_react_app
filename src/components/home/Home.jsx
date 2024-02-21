import React from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Products from './products/Products'
const Home = () => {
  return (
    <div className='Home-display'>
        {/* <MainDisplay /> */}
        {/* <Bussinessinfo /> */}
        <Products />
    </div>
  )
}

export default Home