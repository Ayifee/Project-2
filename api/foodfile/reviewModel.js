import mongoose from 'mongoose'
const Schema = mongoose.Schema

let foodReviewSchema = new Schema({
  name: String,
  Location: String,
  Food: {
    foodName: String,
    extra: String,
  },
  Price: String,
  Rating: Number,
  Review: String,
})

export default mongoose.model('Review', foodReviewSchema)