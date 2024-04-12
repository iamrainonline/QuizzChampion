import express from "express";
import { getComments } from "../models/getComments.js";

const router = express.Router();

router.get("/getPosts", getComments);

export default router;
