import {TweetModel} from "../../models/tweets.model.js";

const addTweet = async (req, res) => {
  const tweet = req.body;

  if (!tweet.userId) {
    return res.status(400).json({
      success: false,
      message: "No user found to create tweet",
    });
  }

  const newTweet = new TweetModel(tweet);

  try {
    await newTweet.save();
    res.status(201).json({
      success: true,
      message: "New tweet successfully added",
    });
  } catch (error) {
    console.error("Error in creating a new tweet", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default addTweet;
