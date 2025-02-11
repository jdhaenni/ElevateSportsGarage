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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/proshop'>Pro Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
