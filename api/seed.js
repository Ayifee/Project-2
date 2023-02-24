import 'dotenv/config'
import mongoose from 'mongoose'
import foodFileUsersReviews from './foodfile/foodFileEntry.json' assert {type: 'json'}
import Review from './foodfile/reviewModel.js'
import Accounts from './server/foodfileusers/Users.json' assert {type: 'json'}
import FoodFileUsers from './server/foodfileusers/foodFileUserModel.js'

// mongoose.connect('mongodb://localhost/test')
mongoose.connect(process.env.DATABASE_URL)
mongoose.set('strictQuery', true)

await seed();
await mongoose.disconnect()

async function seed() {
  await Review.deleteMany()
  await Review.insertMany(foodFileUsersReviews)
  await FoodFileUsers.deleteMany()
  await FoodFileUsers.insertMany(Accounts)
  await mongoose.disconnect()
}
