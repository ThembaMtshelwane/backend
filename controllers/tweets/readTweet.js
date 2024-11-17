import { TweetModel } from "../../models/tweets.model.js";
import mongoose from "mongoose";

const readTweet = async (req, res) => {
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
        message: "Tweet not found",
      });
    }
    res.status(200).json({
      success: true,
      data: tweet,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default readTweet;
