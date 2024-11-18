import asyncHandler from "express-async-handler";
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
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Log out user" });
});

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// @desc Update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export { authUser, logoutUser, getUserProfile, updateUserProfile };
