import React from 'react'
import './Navbar.css'

export default function NavBar () {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>
        Elevate Sports Garage
      </a>
      <ul>
        <li>
          <a href='/'>Home</a>
          <img
            src='https://www.elevatesportsgarage.com/_next/image?url=%2Flogo.png&w=256&q=75'
            alt='esg logo'
          />
          <h1>Elevate Sports Garage</h1>
          <h2>Elevate Yourself</h2>
        </li>
      </ul>
    </nav>
  )
}
