import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: String, 
    required: true
    
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true
    }
  }],
  subtotal: {
    type: Number,
    required: true
  },
  discountAmount: {
    type: Number,
    default: 0
  },
  deliveryFee: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
    default: "pending"
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentDetails: {
    name: String,
    cardNumber: String,
    expiry: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;