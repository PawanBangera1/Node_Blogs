import express from "express";
import { middleware } from "../Middleware/middleware.js";
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "../Controllers/postController.js";

const router = express.Router();

router.post("/", middleware, createPost);
router.get("/", middleware, getAllPosts);
router.get("/:id", middleware, getPostById);
router.put("/:id", middleware, updatePost);
router.delete("/:id", middleware, deletePost);

export default router;