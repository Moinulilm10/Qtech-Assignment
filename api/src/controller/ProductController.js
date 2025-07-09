import { Product } from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { image, title, price, isFavorite, inCart, isUpcoming } = req.body;

    const product = new Product({
      image,
      title,
      price,
      isFavorite: !!isFavorite,
      inCart: !!inCart,
      isUpcoming: !!isUpcoming,
    });

    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create product", error: err.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: err.message });
  }
};
