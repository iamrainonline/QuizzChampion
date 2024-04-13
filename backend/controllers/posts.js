import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const createPost = (req, res) => {
   const q = "INSERT INTO posts(`comment`, `userId`) VALUES (?)";
   const values = [req.body.comment, req.body.userId];

   db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("Post has been created with success");
   });
};

export const deletePost = (req, res) => {
   const token = req.cookies.jwt;
   const postId = req.body.postId;
   if (!token) return res.status(401).json("Not authenticated");

   jwt.verify(token, "SecretKey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

      const q = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?";
      db.query(q, [postId, userInfo.id], (err, data) => {
         console.log(data);
         if (data.affectedRows === 0) {
            return res.status(403).json("You can delete only your post!");
         }
         return res.json("Post has been deleted");
      });
   });
};
