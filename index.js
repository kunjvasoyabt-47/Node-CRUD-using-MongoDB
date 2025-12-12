import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./routes/users.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // Middleware to parse JSON bodies
app.use("/api/users", usersRouter); 

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  })
  .catch(err => console.error("MongoDB connection error:", err));
