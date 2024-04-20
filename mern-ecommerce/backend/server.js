const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Routes
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Start the server
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server started on port ${port}`));