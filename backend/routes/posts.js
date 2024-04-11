import express from "express";
import { createPost } from "../controllers/posts.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/createPost", verifyToken, createPost);

export default router;
