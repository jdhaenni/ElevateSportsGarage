import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar ({ isOpen, toggleSidebar }) {
  return (
    <div>
      <button onClick={toggleSidebar} className='hamburger'>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className='close-button'>
          &times;
        </button>
        <ul>
          <li>
            <Link to='/'>
              <button className='link' onClick={toggleSidebar}>
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to='/services'>
              <button className='link' onClick={toggleSidebar}>
                Services
              </button>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <button className='link' onClick={toggleSidebar}>
                Contact
              </button>
            </Link>
          </li>
          <li>
            <Link to='/proshop'>
              <button className='link' onClick={toggleSidebar}>
                Pro Shop
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
