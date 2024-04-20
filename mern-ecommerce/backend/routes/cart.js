const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const user = req.user;
    const cart = await Cart.findOne({ user: user._id }).populate('items.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    const user = req.user;
    let cart = await Cart.findOne({ user: user._id });

    if (!cart) {
      cart = new Cart({ user: user._id, items: [] });
    }

    const { productId, quantity } = req.body;
    const existingItemIndex = cart.items.findIndex(item => item.productId.equals(productId));

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/remove', async (req, res) => {
    try {
      const user = req.user;
      const cart = await Cart.findOne({ user: user._id });
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      const { productId } = req.body;
      const updatedItems = cart.items.filter(item => !item.productId.equals(productId));
      cart.items = updatedItems;
  
      await cart.save();
      res.json(cart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
