import express from "express";
import { googleAuth, registerUser, signinUser } from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signinUser);
router.post("/google", googleAuth);

export default router;
