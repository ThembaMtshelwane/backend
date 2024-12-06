import { UserModel } from "../../models/user.model.js";
import generateToken from "../../utils/generateToken.js";

// @desc Register new user
// route POST /api/users/
// @access Public
const createUser = async (req, res) => {
  const user = req.body;
  const { firstName, lastName, email, username, DOB, password } = req.body;

  if (!username && !lastName && !DOB && !email && !firstName && !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    return res.status(401).json({
      success: false,
      message: "User email already exists",
      data: null,
    });
  }

  const newUser = new UserModel(user);

  try {
    const user = await newUser.save();
    generateToken(res, user._id);
    res.status(201).json({
      success: true,
      message: "New user successfully added",
      data: user,
    });
  } catch (error) {
    console.error("Error in signup new user", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      data: null,
    });
  }
};

export default createUser;
