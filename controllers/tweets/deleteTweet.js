import { TweetModel } from "../../models/tweets.model.js";
import mongoose from "mongoose";

const deleteTweet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Tweet not found",
    });
  }
  try {
    await TweetModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Tweet successfully deleted",
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default deleteTweet;
