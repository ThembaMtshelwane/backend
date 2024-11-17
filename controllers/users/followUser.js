import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";

const followUser = async (req, res) => {
  const { id } = req.params; // get user id

  const { followerId } = req.body; // get follower id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  if (!mongoose.Types.ObjectId.isValid(followerId)) {
    return res.status(404).json({
      success: false,
      message: "Follower not found",
    });
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $addToSet: { followers: followerId } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(500).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Follower added successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the follower",
      error: error.message,
    });
  }
};

export default followUser;
