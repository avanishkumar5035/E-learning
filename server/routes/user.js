import express from "express";
import { register } from "../controllers/user.js";

const router = express.Router();

// ✅ Browser ke liye GET route
router.get("/user/register", (req, res) => {
  res.send("Register page working in browser ✅");
});

// ✅ Actual API (POST)
router.post("/user/register", register);

export default router;
