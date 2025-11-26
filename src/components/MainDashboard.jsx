import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import "../styles/mainDashboard.css"

const MainDashboard = () => {
  return (
    <div className='main_dashboard'>
      <div className='header_main_s'>
        <Header/>
      </div>
      <div className='main_outlet'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainDashboard
