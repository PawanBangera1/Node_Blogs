import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async (req, res) => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
        return connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).json({ message: "Failed to connect to MongoDB" });
    }
};