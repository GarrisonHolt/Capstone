import mongoose from "mongoose";

const commentSchema = mongoose.Schema ({
    username: String,
    content: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Comment = mongoose.model("Comment", commentSchema);

export default Comment;