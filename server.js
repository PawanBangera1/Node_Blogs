import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./src/Routers/authRouter.js";
import userRouter from "./src/Routers/userRouter.js";
import postRouter from "./src/Routers/postRouter.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/health", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});