import "dotenv/config";
import express from "express";
import productRouter from "./api/product";
import categoryRouter from "./api/category";
import reviewRouter from "./api/review";
import orderRouter from "./api/order"; 
import { connectDB } from "./insfrastructure/db";
import globalErrorHandlingMiddleware from "./api/middleware/global-error.handling-middleware";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
const app = express();


app.use(express.json());
app.use(clerkMiddleware());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter); 

app.use(globalErrorHandlingMiddleware);

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});