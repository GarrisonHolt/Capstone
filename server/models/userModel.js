import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    username: String,
    password: String,
    profilePicture: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var User = mongoose.model("User", userSchema);

export default User;