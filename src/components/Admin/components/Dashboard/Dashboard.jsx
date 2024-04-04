import React from 'react'
import './Dashboard.css'
import AdminHeader from '../Header/AdminHeader'
import DashboardComponent from './DashboardComponent/DashboardComponent'
const Dashboard = () => {
  return (
    <div className='Dashboard-display'>
     hi
      <div className='Dashboard-components'>
        <DashboardComponent />
        <DashboardComponent />
        <DashboardComponent />
      </div>
    </div>
  )
}

export default Dashboard