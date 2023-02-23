import mongoose from 'mongoose'
import foodFileUsersReviews from './api/foodfile/foodFileEntry.json' assert {type: 'json'}
import Review from './api/foodfile/reviewModel.js'
import Accounts from './api/server/foodfileusers/Users.json' assert {type: 'json'}
import FoodFileUsers from './api/server/foodfileusers/foodFileUserModel.js'

mongoose.connect('mongodb://localhost/test')
await Review.deleteMany()
await Review.insertMany(foodFileUsersReviews)
await FoodFileUsers.deleteMany()
await FoodFileUsers.insertMany(Accounts)
await mongoose.disconnect()
await FoodFile
