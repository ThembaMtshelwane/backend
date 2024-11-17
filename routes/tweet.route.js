import express from "express";

import updateTweet from "../controllers/tweets/updateTweet.js";
import addTweet from "../controllers/tweets/addTweet.js";
import deleteTweet from "../controllers/tweets/deleteTweet.js";
import readAllTweets from "../controllers/tweets/readAllTweets.js";
import readTweet from "../controllers/tweets/readTweet.js";
import { readAllComments } from "../controllers/comments/readAllComments.js";

const router = express.Router();

router.get("/", readAllTweets);
router.get("/:id", readTweet);
router.post("/", addTweet);
router.patch("/:id", updateTweet);
router.delete("/:id", deleteTweet);

router.get("/comments/:id", readAllComments);

export default router;
