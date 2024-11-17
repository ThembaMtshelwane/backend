import { UserModel } from "../../models/user.model.js";

const createUser = async (req, res) => {
  const user = req.body;

  if (!user.username) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  const newUser = new UserModel(user);

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "New user successfully added",
    });
  } catch (error) {
    console.error("Error in signup new user", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default createUser;
