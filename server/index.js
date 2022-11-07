import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";

import authRoutes from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000 || "https://capstone-oxk6wfmly-garrisonholt.vercel.app/";
const CONNECTION_URL = process.env.MONGO_URL
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb)=> {
        cb(null, req.body.name);
    },
})

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use("/api/auth/", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Sever is running on PORT: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} unable to connect`))