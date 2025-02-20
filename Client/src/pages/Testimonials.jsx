import React from 'react'
import Reviews from '../components/reviews/Reviews'
import 'react-router-dom'
import './Testimonials.css'

export default function Testimonials () {
  return (
    <div className='testimonials'>
      <h2 className='testimonials-title'>What Our Customers Say</h2>
      <Reviews />
    </div>
  )
}
