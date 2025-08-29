// server.js
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// MongoDB connection
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("Hello World, Database is Connected"))
  .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
