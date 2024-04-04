import React from 'react'
import './dashboardComponent.css'
const DashboardComponent = ({title,value}) => {
  return (
    <div className='dashboard-component-display'>
        <div className='dashboard-component-container'>
                <div className='dashboard-component-header'>{title}</div>
                <div className='dashboard-component-num'>{value}</div>
        </div>
    </div>
  )
}

export default DashboardComponent