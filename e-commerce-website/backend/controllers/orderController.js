const Order = require('../../database/models/Order');
const User = require('../../database/models/User');
const Product = require('../../database/models/Product');

const createOrder = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock available' });
    }

    const order = new Order({
      user: userId,
      product: productId,
      quantity,
      total: product.price * quantity,
    });

    await order.save();

    product.stock -= quantity;
    await product.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('product').populate('user');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders };