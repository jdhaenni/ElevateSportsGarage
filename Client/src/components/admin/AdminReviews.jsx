import React from 'react'
import {
  fetchAllReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview
} from '../../api/ReviewsApi'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function AdminReviews () {
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    date: '',
    stars: '',
    body: '',
    image: ''
  })
  const [createReviewIMG, setCreateReviewIMG] = useState(null)
  const [reviews, setReviews] = useState([])

  const handleReviewSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', createReviewIMG)
    formData.append('upload_preset', 'ESGimg')
    setCreateReviewIMG(null)

    try {
      if (createReviewIMG != null) {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        const { secure_url } = response.data
        console.log(secure_url)
        setReviewFormData(prevData => ({
          ...prevData,
          image: secure_url
        }))
      }
      
    await createReview(reviewFormData)

      

      setReviewFormData({
        name: '',
        date: '',
        stars: '',
        body: '',
        image: ''
      })
     
      const data = await fetchAllReviews()
      console.log(data)
      setReviews(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchAllReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  const deleteReviewButton = async e => {
    await deleteReview(e.target.name)
    const data = await fetchAllReviews()
    setReviews(data)
  }

  const handleReviewChange = e => {
    setReviewFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const starsFunction = function (numberOfStars) {
    return Array.from({ length: numberOfStars }).map((_, index) => (
      <div className='stars' key={index}>
        &#11088;
      </div>
    ))
  }
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
            <label htmlFor='image'>Image</label>
            <input
              type='file'
              name='image'
              id='image'
              onChange={event => {
                setCreateReviewIMG(event.target.files[0])
              }}
            />
            <button type='submit'>Create New Review</button>
          </form>
          <br></br>
          {reviews.map(review => {
            return (
              <li key={review._id}>
                
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
                
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
