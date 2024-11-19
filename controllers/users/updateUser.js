import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "User profile not found",
    });
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User profile not updated",
    });
  }
};

export default updateUser;
