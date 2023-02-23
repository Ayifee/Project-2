import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodFileUser = new Schema({
  full_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
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
  status: {
    type: Boolean,
    required: true,
  }
})

export default mongoose.model('Employee', foodFileUser)