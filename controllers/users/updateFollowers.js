import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

// Connect to your MongoDB
const DATABASE_URI = process.env.MONGO_URI;
mongoose
  .connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database.");
    updateUsersWithFollowers();
  })
  .catch((error) => console.error("Database connection error:", error));

async function updateUsersWithFollowers() {
  try {
    // Update all users, setting an empty array for the 'followers' field if it doesn't exist
    const result = await UserModel.updateMany(
      { followers: { $exists: false } }, // Only update documents without the 'followers' field
      { $set: { followers: [] } } // Set 'followers' to an empty array
    );

    console.log(
      `Updated ${result.modifiedCount} user(s) to include an empty followers array.`
    );
  } catch (error) {
    console.error("Error updating users:", error);
  } finally {
    mongoose.connection.close();
  }
}
