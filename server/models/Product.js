import mongoose from "mongoose";

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  src: String,
  alt: String,
});
const reviewsCountSchema = new Schema({
  average: Number,
  totalCount: Number,
});

const ProductSchema = new Schema(
  {
    id: String,
    price: Number,
    oldprice: Number,
    inStock: Boolean,
    name: String,
    href: String,
    images: [imagesSchema],
    reviews: [reviewsCountSchema],
    highlights: [String],
    details: String,
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
