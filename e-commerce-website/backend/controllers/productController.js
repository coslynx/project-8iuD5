const Product = require('../../database/models/Product');
const User = require('../../database/models/User');
const Order = require('../../database/models/Order');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json(product);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    const { name, description, price } = req.body;
    try {
      const newProduct = await Product.create({ name, description, price });
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true });
      if (!updatedProduct) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json(updatedProduct);
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = productController;