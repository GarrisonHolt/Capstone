import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import User from "../models/userModel";

const router = express.Router();

//Register
export const register = async (req, res) => {
    const { username, password, profilePicture }= req.body
    const saltRounds = 10

    try {
        const salt = await bcrypt.genSalt(saltRounds)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new User ({ username, password: hashPassword, profilePicture })
        await newUser.save();
        
        res.status(201).json({message: "User has been successfully created"});

    } catch (error) {
        res.status(400).json({message: "Missing values"});
    }
}

//Login
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json({message: "Wrong credentials"});

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json({message: "Wrong credentials"});

        res.status(201).json({ message: "Login Successful" })
    } catch (error) {
        res.status(500).json(error)
    }
}

export default router;