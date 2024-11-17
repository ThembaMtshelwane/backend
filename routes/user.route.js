import express from "express";

import createUser from "../controllers/users/createUser.js";
import readAllUsers from "../controllers/users/readAllUsers.js";
import updateUser from "../controllers/users/updateUser.js";
import deleteUser from "../controllers/users/deleteUser.js";
import followUser from "../controllers/users/followUser.js";
import unfollowUser from "../controllers/users/unfollowUser.js";
import readUser from "../controllers/users/readUser.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", readAllUsers);
router.get("/:id", readUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.patch("/:id/follower", followUser);
router.patch("/:id/follower/:fid", unfollowUser);

export default router;
