import { Review } from '../models/review.schema.js'

export async function createReview (req, res) {
  const { name, date, stars, body } = req.body

  const review = new Review({
    name, 
    date,
    stars,
    body
  })

  res.send('Review Created Succesfully')
  await review.save()
}

export async function getReviews (req, res) {
  const reviews = await Review.find({})
  res.send(reviews)
}

export async function getReviewById (req, res) {
  const { id } = req.params
  try {
    const review = await Review.find({_id:id})

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      })
    }

    res.status(200).json(review)
  } catch (error) {
    console.log(error)
  }
}
export async function updateReview (req, res) {
  try {
    // get the id from the request params
    const { id } = req.params

    // destructure the request body
    const { name, date, stars, body } = req.body

    // find the service by id
    const review = await Review.findById(id)

    // validation
    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      })
    }

    // update the service
    review.name = name
    review.date = date
    review.stars = stars
    review.body = body

    // save the post
    await review.save()

    // send the success response
    res.status(200).json(review)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteReview (req, res) {
  try {
    // get the id from the request params
    const { id } = req.params

    // find the service by id
    const review = await Review.findById(id)

    // validation
    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      })
    }

    // delete the post
    await Review.findByIdAndDelete(id)

    // send the success response
    res.status(200).json({
      success: true,
      message: 'Review deleted successfully'
    })
  } catch (error) {
    console.log(error)
  }

 
}
