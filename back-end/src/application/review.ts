import Product from "../insfrastructure/db/entities/Product";
import Review from "../insfrastructure/db/entities/Review";

import { Request, Response, NextFunction } from "express";
const getAllReviews = async (req:Request, res:Response) => {
  const reviews = await Review.find();
  res.json(reviews);
};
const createReview = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = req.body;

    const newReview = await Review.create({
      review: data.review, 
      rating: data.rating,
    });

    await Product.findByIdAndUpdate(data.productId, {
      $push: { reviews: newReview._id },
    });

    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};


export {createReview, getAllReviews};