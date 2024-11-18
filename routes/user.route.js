import express from "express";

import createUser from "../controllers/users/createUser.js";
import readAllUsers from "../controllers/users/readAllUsers.js";
import updateUser from "../controllers/users/updateUser.js";
import deleteUser from "../controllers/users/deleteUser.js";
import followUser from "../controllers/users/followUser.js";
import unfollowUser from "../controllers/users/unfollowUser.js";
import readUser from "../controllers/users/readUser.js";
import { authUser, logoutUser } from "../controllers/users/authUser.js";

const router = express.Router();

router.post("/auth", authUser); // login
router.post("/logout", logoutUser);

router.post("/", createUser); // register a user
router.get("/", readAllUsers);
router.get("/:id", readUser); // get a user profile/user
router.put("/:id", updateUser); // update a user profile/ user
router.delete("/:id", deleteUser);

router.patch("/:id/follower", followUser);
router.patch("/:id/follower/:fid", unfollowUser);

export default router;
