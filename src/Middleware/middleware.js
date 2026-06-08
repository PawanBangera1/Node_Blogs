import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { errorHandler } from "../utils/error.js";

dotenv.config();

export const middleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }

        req.user ={id: user.id, email: user.email};
        next();
    });
};