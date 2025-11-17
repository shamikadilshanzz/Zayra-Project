import { NotFoundError } from "../domain/errors/not-found-error";
import { ValidationError } from "../domain/errors/validation-error";
import Product from "../insfrastructure/db/entities/Product";

import { Request, Response, NextFunction } from "express";

const getAllProducts = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const newProduct = req.body;
    if (!newProduct.name) {
      throw new ValidationError("Product name is required");
    }
    if (!newProduct.price) {
      throw new ValidationError("Product price is required");
    }
    await Product.create(newProduct); 
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const product = await Product.findById(req.params.id).populate("reviews" , "-_id-__v"); 
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export { 
    getAllProducts, 
    createProduct, 
    getProductById, 
    updateProductById, 
    deleteProductById
};