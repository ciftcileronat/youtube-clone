import express from "express";
import { signIn, signUp } from "../controllers/auth.js";

const router = express.Router()

/**
 * Create a user
 * Sign in
 * Google auth
*/

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/google",)

export default router;