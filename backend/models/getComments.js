import { db } from "../db.js";

export const getComments = (req, res) => {
   const q =
      "SELECT U.username, U.email, U.id, P.comment FROM posts P INNER JOIN users U on U.id = P.userId ORDER BY P.created_at DESC";

   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   });
};
