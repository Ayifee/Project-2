import mongoose from 'mongoose'
import foodFilesUser from './api/foodfile/foodphile.json' assert {type: 'json'}
import Review from './api/foodfile/reviewModel.js'

mongoose.connect('mongodb://localhost/test')
await Review.deleteMany()
await Review.insertMany(foodFilesUser)
await mongoose.disconnect()