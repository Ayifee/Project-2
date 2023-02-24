import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

mongoose.set("returnOriginal", false);
mongoose.set('strictQuery', true)

mongoose.connect(process.env.DATABASE_URL).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
console.log(process.env.DATABASE_URL)