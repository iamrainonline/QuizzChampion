import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
   const token = req.cookies.jwt;
   try {
      const secret = "SecretKey";
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      if (decoded.id !== req.body.userId) {
         res.json("You are not the post creator");
      }
      next();
   } catch (error) {
      res.status(401).json({
         status: "error",
         error: "Invalid token",
      });
   }
};
