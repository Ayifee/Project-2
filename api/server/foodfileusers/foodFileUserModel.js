import mongoose from 'mongoose'
const Schema = mongoose.Schema

const foodFileUserSchema = new Schema({
  full_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
})

export default mongoose.model('FoodFileUsers', foodFileUserSchema)