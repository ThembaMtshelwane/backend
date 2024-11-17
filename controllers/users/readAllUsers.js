import { UserModel } from "../../models/user.model.js";

const readAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export default readAllUsers;
