import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: [3, "Username must be at least 3 characters long"], maxlength: [30, "Username cannot exceed 30 characters"] },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true, match: [/\S+@\S+\.\S+/, "Please use a valid email address"] },
    password: { type: String, required: true, minlength: [6, "Password must be at least 6 characters long"] },
    profilePicture: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    }, 
    { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;