import express from "express";
import { getUsers, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get("/getUsers", getUsers);
router.delete("/deleteUser", deleteUser);

export default router;
