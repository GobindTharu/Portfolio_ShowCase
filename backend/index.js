import dotenv from "dotenv";
import express from "express";
import cors from "cors";

//Internal imports Here
import connectDB from "./Config/database.js";
import { blogsController } from "./Controller/blogsController.js";
import { jobsController } from "./Controller/jobsController.js";

dotenv.config({});

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);

await connectDB();

app.use(blogsController);
app.use(jobsController);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`App is listening on port ${Port}`);
});
