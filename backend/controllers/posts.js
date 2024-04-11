import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createPost = (req, res) => {
   console.log("the post has been created");
   res.send("test from posting BE").req.body;
};
