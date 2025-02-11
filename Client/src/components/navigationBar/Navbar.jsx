import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar/Sidebar'

export default function NavBar () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <nav className='navbar'>
      <div className='sidebar-container'>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div>
        <img
          className='logo'
          src='https://www.elevatesportsgarage.com/_next/image?url=%2Flogo.png&w=256&q=75'
          alt='esg logo'
        />
      </div>
      <div className='nav-content'>
        <h1 className='site-title'>Elevate Sports Garage</h1>
        <p className='tagline'>
          Elevate Your Game at Canyon Lake's Premier Batting Facility
        </p>
      </div>
    </nav>
  )
}
