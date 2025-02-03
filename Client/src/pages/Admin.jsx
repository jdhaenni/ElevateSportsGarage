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
  }, [services])

 

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchAllReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [reviews])

  const deleteServiceButton = async (e)=>{
    deleteService(e.target.name)
 }

 const deleteReviewButton = async (e)=>{
    deleteReview(e.target.name)
 }


  return (
    <div>
      SERVICES!<br></br>
      <button >CREATE</button><br></br>
      <ul>
        {services.map(service => {
          return (
            <li key={service._id}>
              <p>
                {service.name}
                <br></br>
                {service.description}<br></br>
                {service.price}<br></br>
                <button >UPDATE</button><br></br>
                <button name={service._id} onClick={deleteServiceButton} >DELETE</button><br></br>
              </p>
            </li>
          )
        })}
      </ul>
      <ul>
      REVIEWS!<br></br>
      <button >CREATE</button><br></br>
        {reviews.map(review => {
          return (
            <li key={review._id}>
              <p>
                {review.name}
                <br></br>
                {review.stars}<br></br>
                {review.date}<br></br>
                {review.body}<br></br>
                <button  >UPDATE</button><br></br>
                <button name={review._id} onClick={deleteReviewButton}>DELETE</button><br></br>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
    
    
  )
}
