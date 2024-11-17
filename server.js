import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import tweetRoutes from "./routes/tweet.route.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;
const __dirname = path.resolve();

// CORS options for handling cross-origin requests
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,PATCH",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

// Middleware to handle Content Security Policy (CSP)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://backend-iota-ashy.vercel.app"
  );
  next();
});

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// Define routes
app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);

// Connect to the database once
connectDB();

// Vercel serverless function compatibility: Export the app
export default app;
