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
import AuthService from '../api/AuthService'

export default function Admin () {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const data = await fetchAllServices()
      setServices(data)
    }
    fetchServices()
  }, [services])

  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    description: '',
    price: ''
  })
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    date: '',
    stars: '',
    body:''
  })
  const handleServiceSubmit = async e => {
    e.preventDefault()

    try {
      createService(serviceFormData)
      setServiceFormData({
        name: '',
        description: '',
        price: ''
      })
    } catch (error) {
      console.log(error)
    }
  }
  const handleReviewSubmit = async e => {
    e.preventDefault()

    try {
      createReview(reviewFormData)
      setReviewFormData({
        name: '',
        date: '',
        stars: '',
        body:""
      })
    } catch (error) {
      console.log(error)
    }
  }

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchAllReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [reviews])

  const deleteServiceButton = async e => {
    deleteService(e.target.name)
  }

  const deleteReviewButton = async e => {
    deleteReview(e.target.name)
  }
   
const handleServiceChange = (e) => {
  setServiceFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
  }));
};
const handleReviewChange = (e) => {
  setReviewFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
  }));
};


  return (
    <div>
      SERVICES!<br></br>
      NEW SERVICE<br></br>
      <form></form> <form onSubmit={handleServiceSubmit}>
        <label>Service Name</label><br></br>
        <input type='text' name = 'name' value = {serviceFormData.name} onChange={handleServiceChange}></input><br></br>
        <label>Description</label><br></br>
        <input type='text' name = 'description' value = {serviceFormData.description} onChange={handleServiceChange}></input><br></br>
        <label>Price</label><br></br>
        <input type='text' name = 'price' value = {serviceFormData.price} onChange={handleServiceChange}></input><br></br>
        <button type='submit'>Create New Service</button>
      </form>
      
      
      <br></br>
      <ul>
        {services.map(service => {
          return (
            <li key={service._id}>
              <p>
                {service.name}
                <br></br>
                {service.description}
                <br></br>
                {service.price}
                <br></br>
                <button>UPDATE</button>
                <br></br>
                <button name={service._id} onClick={deleteServiceButton}>
                  DELETE
                </button>
                <br></br>
              </p>
            </li>
          )
        })}
      </ul>
      <ul>
        REVIEWS!<br></br>
        NEW REVIEW<br></br>
      <form></form> <form onSubmit={handleReviewSubmit}>
        <label>Name</label><br></br>
        <input type='text' name = 'name' value = {reviewFormData.name} onChange={handleReviewChange}></input><br></br>
        <label>Date</label><br></br>
        <input type='text' name = 'date' value = {reviewFormData.date} onChange={handleReviewChange}></input><br></br>
        <label>Stars</label><br></br>
        <input type='text' name = 'stars' value = {reviewFormData.stars} onChange={handleReviewChange}></input><br></br>
        <label>Body</label><br></br>
        <input type='text' name = 'body' value = {reviewFormData.body} onChange={handleReviewChange}></input><br></br>
        <button type='submit'>Create New Review</button>
      </form>
        
        <br></br>
        {reviews.map(review => {
          return (
            <li key={review._id}>
              <p>
                {review.name}
                <br></br>
                {review.stars}
                <br></br>
                {review.date}
                <br></br>
                {review.body}
                <br></br>
                <button>UPDATE</button>
                <br></br>
                <button name={review._id} onClick={deleteReviewButton}>
                  DELETE
                </button>
                <br></br>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
