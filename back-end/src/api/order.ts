import express from "express";
import { requireAuth } from "@clerk/express";
import Order from "../insfrastructure/db/entities/Order";
import { ValidationError } from "../domain/errors/validation-error";

const router = express.Router();

type AuthRequest = express.Request;

function isUserAuth(auth: any): auth is { userId: string } {
  return auth && typeof auth.userId === "string";
}

router.post("/", requireAuth(), async (req: AuthRequest, res, next) => {
  try {
    const auth = req.auth;

    if (!isUserAuth(auth)) {
      throw new ValidationError("User is not authenticated");
    }

    const userId = auth.userId;

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

    if (!Array.isArray(items) || items.length === 0) {
      throw new ValidationError("Order must contain at least one item");
    }

    if (!paymentMethod) {
      throw new ValidationError("Payment method is required");
    }

    if (typeof subtotal !== "number" || subtotal < 0) {
      throw new ValidationError("Valid subtotal is required");
    }

    if (typeof total !== "number" || total < 0) {
      throw new ValidationError("Valid total is required");
    }

    for (const item of items) {
      if (!item.productId || !item.quantity || !item.price) {
        throw new ValidationError(
          "Each item must have productId, quantity, and price"
        );
      }
      if (typeof item.quantity !== "number" || item.quantity < 1) {
        throw new ValidationError("Item quantity must be a positive number");
      }
      if (typeof item.price !== "number" || item.price < 0) {
        throw new ValidationError("Item price must be a valid number");
      }
    }

    const orderData = {
      userId,
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

    const order = new Order(orderData);
    const savedOrder = await order.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: savedOrder
    });
  } catch (error) {
    next(error);
  }
});

export default router;
