import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
   const q = "SELECT * FROM  users ORDER BY id DESC";

   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   });
};

export const deleteUser = (req, res) => {
   const token = req.cookies.jwt;
   const userId = req.body.userId;
   if (!token) return res.status(401).json("Not authenticated");

   jwt.verify(token, "SecretKey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

      const q = "DELETE FROM users  WHERE `id` = ?";
      db.query(q, [userId], (err, data) => {
         if (data.affectedRows === 0) {
            return res.status(403).json("User was not deleted!");
         }
         return res.json("User has been deleted");
      });
   });
};
