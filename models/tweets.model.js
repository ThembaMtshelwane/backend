import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  caption: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parentTweetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tweet",
  },
  media: [
    {
      mediaId: { type: mongoose.Schema.Types.ObjectId, required: true },
      url: { type: String, required: true },
      tweetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        required: true,
      },
      createdAt: { type: String },
      updatedAt: { type: String, required: true },
    },
  ],
  comments: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      tweetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        required: true,
      },
    },
  ],
  likes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      tweetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        required: true,
      },
      likedAt: {
        type: Date,
        required: true,
      },
    },
  ],
  createdAt: { type: String },
  updatedAt: { type: String, required: true },
});

export const TweetModel = mongoose.model("Tweet", tweetSchema);
