import mongoose from "mongoose";
import { TweetModel } from "../../models/tweets.model.js";

const updateTweet = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({
      success: false,
      message: "Tweet not found",
    });
  }
  console.log("updatedFields", updatedFields);

  try {
    const updatedTweet = await TweetModel.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      success: true,
      data: updatedTweet,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default updateTweet;
