import express from "express";
import Product from "../models/Product.js";


let storeItems = [];

function setStoreItems(items) {
  storeItems = items;
}


const router = express.Router();

router.get("/items", async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json(items);
    console.log(items)
    setStoreItems(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
