import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
// import Review from './foodfile/reviewModel.js'
// import FoodFileUsers from './server/foodfileusers/foodFileUserModel.js'
import lifecycle from './middleware/lifecycle.js'
// import foodFileReview from '../foodfile/model.js'
import router from './router/foodFileUserModelRouter.js'
const app = express()

app.use("/", router, routerlifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
    // @ts-ignore
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    await mongoose.disconnect()
  }
}))

console.log(process.env.DATABASE_URL)
// Feel free to use a router and move this elsewhere.
// app.get('/api', async (req, res) => {
//   await Todo.insertMany([{ text: (new Date()).toISOString() }])
// const todos = await Todo.find()

//   console.log(process.env.DATABASE_URL)
//   res.json({ message: 'Hello World', todos })
// })

// app.get('/:reviews', async (req, res) => {
//   const showFood = await Review.find()
//   res.json(showFood)
// })

// app.get('/:users', async (req, res) => {
//   const showUsers = await FoodFileUsers.find()
//   res.json(showUsers)
// })
// Don't use app.listen. Instead export app.
export default app