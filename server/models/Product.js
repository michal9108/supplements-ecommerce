import mongoose from "mongoose";

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  src: String,
  alt: String,
});

const reviewsCountsSchema = new Schema({
  rating: Number,
  count: Number,
  
});
const reviewsFeaturedSchema = new Schema({
  id: Number,
  rating: Number,
  title: String,
  content: String,
  datetime: String,
  author: String,
});


const reviewsSchema = new Schema({
  average: Number,
  totalCount: Number,
  counts:[reviewsCountsSchema],
  featured:[reviewsFeaturedSchema],
});

const descriptionSchema = new Schema({
  title: String,
  content: String,
  summary:String,
});
const benefitsSchema = new Schema({
  benefittitle: String,
  text: String,
});
const featuresSchema = new Schema({
  featuretitle: String,
  text: String,
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
    reviews: [reviewsSchema],
    highlights: [String],
    details: String,
    description:[descriptionSchema],
    benefits:[benefitsSchema],
    features:[featuresSchema],
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
