import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv.config({});

const URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mern:mern%40123@school.xg9dy.mongodb.net/NaviInfosys?retryWrites=true&w=majority&appName=School";

const connectDB = async () => {
  try {

    await mongoose.connect(URI);

    console.log("Database Connection Successful.");
  } catch (error) {
    console.log("Failed to connect Database.");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
