import React from 'react'
import './Dashboard.css'
import animate from "../../../Assets/gears-5909_256.gif"

const Dashboard = () => {
  
  return (
    <div className='Dashboard-display'>
      <div className='Dashboard-components'>
         <img src={animate}/>
         <h1>Welcome to Torus Robotics Admin Panel</h1>
      </div>
    </div>
  )
}

export default Dashboard