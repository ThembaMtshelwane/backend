import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

const protect = async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await UserModel.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res
        .status(401)
        .json({ success: false, message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "Not authorized, no token",
    });
  }
};

export { protect };
