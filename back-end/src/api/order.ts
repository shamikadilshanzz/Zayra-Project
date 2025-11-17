// api/order.ts - Backend order route
import express from "express";
import { requireAuth } from "@clerk/express";
import Order from "../insfrastructure/db/entities/Order";
import { ValidationError } from "../domain/errors/validation-error";

const router = express.Router();

// TEST ROUTES (Remove in production)
// GET /api/orders/test - Get all orders without auth (FOR TESTING ONLY)
router.get("/test", async (req, res, next) => {
  try {
    console.log("Test route called - fetching all orders");
    
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .limit(20);
    
    console.log(`Found ${orders.length} orders`);
    
    res.json({
      success: true,
      message: "Test route - all orders",
      count: orders.length,
      orders
    });
  } catch (error) {
    console.error("Error in test route:", error);
    next(error);
  }
});

// POST /api/orders/test - Create order without auth (FOR TESTING ONLY)
router.post("/test", async (req, res, next) => {
  try {
    console.log("Test POST route called");
    console.log("Request body:", req.body);
    
    const {
      items,
      paymentMethod,
      paymentDetails,
      subtotal,
      discountAmount,
      deliveryFee,
      total,
      status = "pending"
    } = req.body;

    const orderData = {
      userId: "test-user-123", // Hardcoded for testing
      items: items || [
        { productId: "507f1f77bcf86cd799439011", quantity: 1, price: 100 }
      ],
      subtotal: subtotal || 100,
      discountAmount: discountAmount || 0,
      deliveryFee: deliveryFee || 15,
      total: total || 115,
      status,
      paymentMethod: paymentMethod || "test",
      paymentDetails: paymentDetails || null,
      createdAt: new Date()
    };
    
    const order = new Order(orderData);
    const savedOrder = await order.save();
    
    console.log("Test order saved:", savedOrder._id);
    
    res.status(201).json({
      success: true,
      message: "Test order created",
      order: savedOrder
    });
  } catch (error) {
    console.error("Error in test POST route:", error);
    next(error);
  }
});

router.post("/", requireAuth(), async (req, res, next) => {
  try {
    console.log("Order creation request received:", req.body);
    
    const auth = req.auth();
    console.log("User ID from auth:", auth?.userId);

    const {
      items,
      paymentMethod,
      paymentDetails,
      subtotal,
      discountAmount,
      deliveryFee,
      total,
      status = "pending"
    } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new ValidationError("Order must contain at least one item");
    }

    if (!paymentMethod) {
      throw new ValidationError("Payment method is required");
    }

    if (typeof subtotal !== 'number' || subtotal < 0) {
      throw new ValidationError("Valid subtotal is required");
    }

    if (typeof total !== 'number' || total < 0) {
      throw new ValidationError("Valid total is required");
    }

    for (const item of items) {
      if (!item.productId || !item.quantity || !item.price) {
        throw new ValidationError("Each item must have productId, quantity, and price");
      }
      if (typeof item.quantity !== 'number' || item.quantity < 1) {
        throw new ValidationError("Item quantity must be a positive number");
      }
      if (typeof item.price !== 'number' || item.price < 0) {
        throw new ValidationError("Item price must be a valid number");
      }
    }

    const orderData = {
      userId: auth.userId, 
      items,
      subtotal,
      discountAmount: discountAmount || 0,
      deliveryFee: deliveryFee || 0,
      total,
      status,
      paymentMethod,
      paymentDetails: paymentDetails || null,
      createdAt: new Date()
    };

    console.log("Creating order with data:", orderData);

    const order = new Order(orderData);
    const savedOrder = await order.save();

    console.log("Order saved successfully:", savedOrder._id);
    console.log("Full saved order:", JSON.stringify(savedOrder, null, 2));

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: savedOrder
    });

  } catch (error) {
    console.error("Error creating order:", error);
    next(error);
  }
});

router.get("/", requireAuth(), async (req, res, next) => {
  try {
    const auth = req.auth();
    console.log("Fetching orders for user:", auth.userId);
    
    const orders = await Order.find({ userId: auth.userId })
      .populate('items.productId')
      .sort({ createdAt: -1 });
    
    console.log(`Found ${orders.length} orders for user ${auth.userId}`);
    
    res.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    next(error);
  }
});

router.get("/:id", requireAuth(), async (req, res, next) => {
  try {
    const auth = req.auth();
    const order = await Order.findOne({ 
      _id: req.params.id, 
      userId: auth.userId 
    }).populate('items.productId');
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }
    
    res.json({
      success: true,
      order
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    next(error);
  }
});

export default router;