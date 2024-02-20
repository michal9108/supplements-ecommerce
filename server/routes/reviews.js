import express from "express";
import Reviews from "../models/Reviews.js";

const router = express.Router();

router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json(reviews);
    return reviews || [];
  } catch (error) {
    res.status(404).json({ message: error.message });
    return [];
  }
});

export default router;
