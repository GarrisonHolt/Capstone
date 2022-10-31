import express from "express";
import mongoose from "mongoose";

import Post from "../models/postModel.js";

const router = express.Router();

//Get all posts
export const getPosts = async (req, res) => {
    const title = req.query.title;
    const tags = req.query.tags;

    try {
        let posts;
        if(title) {
            posts = await Post.find({title});
        } else if (tags) {
            posts = await Post.find({
                tags: {
                    $in: [tags],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ message: "Unable to fetch posts" });
    }
}

//Get post by id
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: "Post not found" });
    }
}

//Create post
export const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json( savedPost, { message: "Post successfully created" })
    } catch (error) {
        res.status(400).json({ message: "Missing values "})
    }
}

//Update post
export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    },
                    { new: true }
                );
                res.status(201).json({ message: "Post successfully updated" })
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).json({ message: "You are not authorized to update this post" })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete post
export const deletePOst = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await Post.delete();
                res.status(200).json({ message: "Post successfully delete" })
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).json({ message: "You are not authorized to delete this post" })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


//Comment
export const commentOnPost = async (req, res) => {

}

export default router;
