import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
   console.log("i am token", req.cookies.jwt);
   const token = req.cookies.jwt;
   try {
      const secret = "SecretKey";
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      console.log(`[verifyToken] Attached user: ${JSON.stringify(req.user)}`);
      next();
   } catch (error) {
      res.status(401).json({
         status: "error",
         error: "Invalid token",
      });
   }
};
