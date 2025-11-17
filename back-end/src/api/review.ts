import express from "express";
import {createReview,getAllReviews} from '../application/review';

const reviewRouter = express.Router();

reviewRouter.route('/')
.get(getAllReviews)
.post(createReview);


export default reviewRouter;