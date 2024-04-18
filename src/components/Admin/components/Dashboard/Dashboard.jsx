import React from 'react'
import './Dashboard.css'
import AdminHeader from '../Header/AdminHeader'
import DashboardComponent from './DashboardComponent/DashboardComponent'
import {AreaChart,Area ,ResponsiveContainer, YAxis, XAxis, CartesianAxis, CartesianGrid} from "recharts"
const Dashboard = () => {
  const data =[
    {
    name:"jan",
    key:1,},{
      name:"feb",
      key:2,
     
    }
    

  ]
  return (
    <div className='Dashboard-display'>
     
      <div className='Dashboard-components'>

      </div>
    </div>
  )
}

export default Dashboard