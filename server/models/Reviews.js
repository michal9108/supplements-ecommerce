import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewsSchema = new Schema(
  {
    title: String,
    description: String,
    name: String,
    country: String,
    showStar: Boolean,
    verifiedBuyer: Boolean,
  },
  { timestamps: true },
);

const Reviews = mongoose.model("Reviews", ReviewsSchema);
export default Reviews;
