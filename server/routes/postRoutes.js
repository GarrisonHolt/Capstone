import express from "express";
import { getPosts, getPostById, createPost, updatePost, deletePost, commentOnPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts)
router.get ("/:id", getPostById)
router.post ("/", createPost)
router.put ("/:id", updatePost)
router.delete ("/:id", deletePost)
router.put ("/:id", commentOnPost)

export default router;