import mongoose from "mongoose";
import { TweetModel } from "../../models/tweets.model.js";

export const readAllComments = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Tweet ID",
    });
  }

  try {
    const tweet = await TweetModel.findById(id);
    if (!tweet) {
      return res.status(404).json({
        success: false,
        message: "Parent Tweet not found",
      });
    }

    const childTweets = await Promise.all(
      tweet.comments.map(async (comment) => {
        const childTweet = await TweetModel.findById(comment.tweetId);
        if (!childTweet) {
          throw new Error(`Child Tweet with ID ${comment.tweetId} not found`);
        }
        return childTweet;
      })
    );
    res.status(200).json({
      success: true,
      data: childTweets,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
