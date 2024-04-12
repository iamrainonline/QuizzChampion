import { db } from "../db.js";

export const createPost = (req, res) => {
   const q = "INSERT INTO posts(`comment`, `userId`) VALUES (?)";
   const values = [req.body.comment, req.body.userId];

   db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("Post has been created with success");
   });
};

export const deletePost = (req, res) => {
   const postId = req.body.id;

   const q = `DELETE FROM posts WHERE id = ?`;
   const values = [postId];

   db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json("Post has been deleted");
   });
};
