import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";

const unfollowUser = async (req, res) => {
  const { id, fid } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  if (!mongoose.Types.ObjectId.isValid(fid)) {
    return res.status(404).json({
      success: false,
      message: "Follower not found",
    });
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $pull: { followers: fid } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Follower removed successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while removing the follower",
      error: error.message,
    });
  }
};

export default unfollowUser;
