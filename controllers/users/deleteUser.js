import { UserModel } from "../../models/user.model.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User successfully deleted",
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default deleteUser;
