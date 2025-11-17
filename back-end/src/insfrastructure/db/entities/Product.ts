import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  image: {
    type: String,
    required: true
  },
  description: { 
    type: String, 
    required: true 
  },
  categoryId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true 
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref:"Review",
    default: [],
  },
  trending: {
    type: Boolean,
    default: false
  },
  discount: {
    type: Number,
    default: 0
  }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
