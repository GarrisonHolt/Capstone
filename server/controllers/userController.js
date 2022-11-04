import express from "express";
import mongoose from "mongoose";

import User from "../models/userModel.js";

const router = express.Router();

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: "User not found" })
    }
}

export default router;