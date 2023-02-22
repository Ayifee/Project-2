import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodFileUser = new Schema({
  full_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
})

export default mongoose.model('Employee', foodFileUser)