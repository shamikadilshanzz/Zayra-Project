import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0
    },
    review: {
      type: String,
      default: []
    },
});

const Review = mongoose.model("Review", reviewSchema );

export default Review;