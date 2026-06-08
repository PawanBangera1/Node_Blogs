import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content: { 
        type: String,
        required: [true, "Content is required"],
        trim: true,
        minlength: [10, "Content must be at least 10 characters long"],
        maxlength: [5000, "Content cannot exceed 5000 characters"],
        index: true 
    },
    title: { 
        type: String, 
        required: [true, "Title is required"], 
        trim: true,
        minlength: [1, "Title must be at least 1 characters long"],
        maxlength: [100, "Title cannot exceed 100 characters"],
        index: true
    },
    image: { type: String, default: "" },
    categories: { 
        type: String,
        required: [true, "Category is required"],
        enum: [
            "Technology",
            "Health",
            "Lifestyle",
            "Education",
            "Entertainment",
            "Business",
            "Science",
        ], 
    },
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;