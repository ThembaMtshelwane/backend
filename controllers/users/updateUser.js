import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "User not found",
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
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default updateUser;
