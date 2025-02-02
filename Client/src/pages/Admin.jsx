import React from 'react'
import {
  fetchAllServices,
  fetchService,
  createService,
  updateService,
  deleteService
} from '../api/ServicesApi'
import {
  fetchAllReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview
} from '../api/ReviewsApi'
import { useState, useEffect } from 'react'

export default function Admin () {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const data = await fetchAllServices()
      setServices(data)
    }
    fetchServices()
  }, [])

  console.log(services)

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchAllReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  console.log(reviews)


  return (
    <div>
      <ul>
        {services.map(service => {
          return (
            <li key={service._id}>
              <p>
                {service.name}
                <br></br>
                {service.price}
              </p>
            </li>
          )
        })}
      </ul>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review._id}>
              <p>
                {review.name}
                <br></br>
                {review.stars}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
    
    
  )
}
