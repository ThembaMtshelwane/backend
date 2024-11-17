import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js"; // Updated import
import userRoutes from "./routes/user.route.js";
import tweetRoutes from "./routes/tweet.route.js";

// Load environment variables
dotenv.config();

const app = express();
const __dirname = path.resolve();

const corsOptions = {
  origin: ["http://localhost:3000", "https://views-opal.vercel.app/"],
  methods: "GET,POST,PUT,DELETE,PATCH",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);

// Connect to MongoDB
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
})();

// Export app for Vercel compatibility
export default app;
