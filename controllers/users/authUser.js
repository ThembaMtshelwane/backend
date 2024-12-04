import { UserModel } from "../../models/user.model.js";
import generateToken from "../../utils/generateToken.js";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      success: true,
      message: "User successfully authenticated",
      data: user._id,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
};

// @desc Logout user
// route PUT /api/users/logout
// @access Public
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
};

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = async (req, res) => {
  const user = req.user;
  if (user) {
    res.status(200).json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, message: "User profile not found" });
  }
};

export { authUser, logoutUser, getUserProfile };
