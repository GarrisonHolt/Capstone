import mongoose from "mongoose";

const postSchema = mongoose.Schema ({
    title: String,
    content: String,
    username: String,
    tags: [String],
    comments: [String],
    photo: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Post = mongoose.model("Post", postSchema);

export default Post;