import express from "express";

import createUser from "../controllers/users/createUser.js";
import readAllUsers from "../controllers/users/readAllUsers.js";
import updateUser from "../controllers/users/updateUser.js";
import deleteUser from "../controllers/users/deleteUser.js";
import followUser from "../controllers/users/followUser.js";
import unfollowUser from "../controllers/users/unfollowUser.js";
import readUser from "../controllers/users/readUser.js";
import {
  authUser,
  getUserProfile,
  logoutUser,
} from "../controllers/users/authUser.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser); // login
router.post("/logout", logoutUser);

router.get("/profile", protect, getUserProfile); // get a user profile/user
router.put("/profile", protect, updateUser); // update user profile
router.delete("/profile", protect, deleteUser); // delete user profile

router.post("/", createUser); // register a user
router.get("/", readAllUsers);
router.get("/:id", readUser); // get a user profile/user

router.patch("/:id/follower", followUser);
router.patch("/:id/follower/:fid", unfollowUser);

export default router;
