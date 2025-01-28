import React from 'react'
import './Navbar.css'

export default function NavBar () {
  return (
    <nav className='navbar'>
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
