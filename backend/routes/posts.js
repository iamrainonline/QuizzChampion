import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { createPost, deletePost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.post("/createPost", verifyToken, createPost);
router.delete("/deletePost", deletePost);
router.put("/updatePost", updatePost);

export default router;
