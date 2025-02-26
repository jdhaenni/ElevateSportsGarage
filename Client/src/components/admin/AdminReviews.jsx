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
import './AdminReviews.css'
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

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchAllReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  const handleReviewSubmit = async e => {
    e.preventDefault()

    //input validation

  
    if (reviewFormData.stars < 1 || reviewFormData.stars > 5) {
      alert('Stars must be between 1 and 5')
      return
    }

    try {
      let imageUrl = reviewFormData.image

      // Only upload image if one was selected
      if (createReviewIMG != null) {
        const formData = new FormData()
        formData.append('file', createReviewIMG)
        formData.append('upload_preset', 'ESGimg')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        imageUrl = response.data.secure_url
        console.log('Image uploaded:', imageUrl)
      }

      // Create a new object with all form data and the image URL
      const reviewDataToSubmit = {
        ...reviewFormData,
        image: imageUrl
      }

      // Create the service with the complete data
      const newReview = await createReview(reviewDataToSubmit)

      if (newReview) {
        // Reset the form data after successful submission
        setReviewFormData({
          name: '',
          date: '',
          stars: '',
          body: '',
          image: ''
        })
        setCreateReviewIMG(null)

        // Fetch updated services list
        const data = await fetchAllReviews()
        setReviews(data)
      } else {
        throw new Error('Failed to create the Service.')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        style={{
          cursor: 'pointer',
          color: index < numberOfStars ? 'gold' : 'gray',
          fontSize: '20px'
        }}
        onClick={() => setReviewFormData({ ...reviewFormData, stars: index + 1 })}
      >
        &#9733;
      </span>
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
              required
            ></input>
            <br></br>
            <label>Date</label>
            <br></br>
            <input
              type='text'
              name='date'
              value={reviewFormData.date}
              onChange={handleReviewChange}
              required
            ></input>
            <br></br>
            <label>Stars (1-5)</label>
          <br />
          <div>{starsFunction(reviewFormData.stars)}</div>
          <br />
            <label>Body</label>
            <br></br>
            <input
              type='text'
              name='body'
              value={reviewFormData.body}
              onChange={handleReviewChange}
              required
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
                <img src={review.image}></img>
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
