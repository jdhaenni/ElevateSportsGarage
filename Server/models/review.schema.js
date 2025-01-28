import mongoose from 'mongoose'


// create a review schema
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    stars:{type:Number, required: true},
    body: {type:String,required:true}
  }
)

// export the model
export const Review = mongoose.model('Review', reviewSchema)