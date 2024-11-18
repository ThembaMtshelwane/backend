import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import tweetRoutes from "./routes/tweet.route.js";
dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 9000;

const corsOptions = {
  origin: ["http://localhost:3000", "https://views-opal.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);
// app.use(notFound);
// app.use(errorHandler);

(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
})();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
export default app;
