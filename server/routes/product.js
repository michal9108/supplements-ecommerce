import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/items", async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json(items);
    // console.log("route items", items);
    return items || [];
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("error not found");
    return [];
  }
});

export default router;
