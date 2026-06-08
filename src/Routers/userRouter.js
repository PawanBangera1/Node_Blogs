import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../Controllers/userController.js";
import { middleware } from "../Middleware/middleware.js";

const router = express.Router();

router.use(middleware);

router.put("/:id", middleware, updateUser);
router.delete("/:id", middleware, deleteUser);

export default router;