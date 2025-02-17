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
import { getContacts,deleteContact } from '../api/ContactsApi'
import { useState, useEffect } from 'react'
import './Admin.css'
import AdminHours from '../components/admin/AdminHours'


export default function Admin () {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const data = await fetchAllServices()
      setServices(data)
    }
    fetchServices()
    console.log(services)
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

  const deleteContactButton = async e => {
    deleteContact(e.target.name)
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
const [contacts,setContacts] = useState([]) 
useEffect(() => {
  const getAllContacts = async () => {
    const data = await getContacts()
    setContacts(data)
  }
  getAllContacts()
}, [contacts])

const starsFunction = function (numberOfStars){
  return(Array.from({ length: numberOfStars }).map((_, index) => (
    <div className = 'stars' key={index}>&#11088;</div>
  )))}



  return (
    <div className='container'>
      <div className='services'>
      <h1>SERVICES</h1><br></br>
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
      </div>
      <div classname ="reviews">
      <ul>
      <h1>REVIEWS</h1><br></br>
        NEW REVIEW<br></br>
      <form></form> <form onSubmit={handleReviewSubmit}>
        <label>Name</label><br></br>
        <input type='text' name = 'name' value = {reviewFormData.name} onChange={handleReviewChange}></input><br></br>
        <label>Date</label><br></br>
        <input type='text' name = 'date' value = {reviewFormData.date} onChange={handleReviewChange}></input><br></br>
        <label>Stars (1-5)</label><br></br>
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
                {starsFunction(review.stars)}
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
      <div className="contacts">
      <ul>
        <h1>CONTACTS</h1>
      {contacts.map(contact => {
          return (
            <li key={contact._id}>
              <p>
                {contact.name}
                <br></br>
                {contact.email}
                <br></br>
                {contact.body}
                <br></br>
                <button name={contact._id} onClick={deleteContactButton}>
                  DELETE
                </button>
                <br></br>
              </p>
            </li>
          )
        })}
      </ul>
      
      </div>
      <AdminHours />
    </div>
  )
}
