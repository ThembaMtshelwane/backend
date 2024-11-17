import { TweetModel } from "../../models/tweets.model.js";

const readAllTweets = async (req, res) => {
  try {
    const tweets = await TweetModel.find({});
    res.status(200).json({ success: true, data: tweets });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export default readAllTweets;
