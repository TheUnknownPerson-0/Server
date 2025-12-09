import express from "express";
import { createPost, deletePost, getPost, getPosts, getUserPosts, likePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

// public router 
router.get("/", getPost);
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);
// protected router 
router.post("/", protectRoute, upload.single("image"), createPost);
router.post("/:postId/like", protectRoute, likePost);
router.post("/:postId", protectRoute, deletePost);

export default router; 