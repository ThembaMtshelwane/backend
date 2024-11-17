import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: { type: String, required: true },
    followers: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
    DOB: { type: String, required: true },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
