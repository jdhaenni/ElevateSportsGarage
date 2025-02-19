import React from 'react'
import {
  fetchAllReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview
} from '../../api/ReviewsApi'
import { useState, useEffect } from 'react'

export default function AdminReviews () {
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    date: '',
    stars: '',
    body: ''
  })

  const handleReviewSubmit = async e => {
    e.preventDefault()

    try {
      createReview(reviewFormData)
      setReviewFormData({
        name: '',
        date: '',
        stars: '',
        body: ''
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

  const deleteReviewButton = async e => {
    deleteReview(e.target.name)
  }

  const handleReviewChange = e => {
    setReviewFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  
const starsFunction = function (numberOfStars){
    return(Array.from({ length: numberOfStars }).map((_, index) => (
      <div className = 'stars' key={index}>&#11088;</div>
    )))}
  return (
    <div>
      <div className='reviews'>
        <ul>
          <h1>REVIEWS</h1>
          <br></br>
          NEW REVIEW<br></br>
          <form></form>{' '}
          <form onSubmit={handleReviewSubmit}>
            <label>Name</label>
            <br></br>
            <input
              type='text'
              name='name'
              value={reviewFormData.name}
              onChange={handleReviewChange}
            ></input>
            <br></br>
            <label>Date</label>
            <br></br>
            <input
              type='text'
              name='date'
              value={reviewFormData.date}
              onChange={handleReviewChange}
            ></input>
            <br></br>
            <label>Stars (1-5)</label>
            <br></br>
            <input
              type='text'
              name='stars'
              value={reviewFormData.stars}
              onChange={handleReviewChange}
            ></input>
            <br></br>
            <label>Body</label>
            <br></br>
            <input
              type='text'
              name='body'
              value={reviewFormData.body}
              onChange={handleReviewChange}
            ></input>
            <br></br>
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
    </div>
  )
}
