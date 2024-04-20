
// const express = require('express');
// const mongoose = require('mongoose');
// const orderRoutes = require('./routes/orders');
// const cors = require("cors")

// const app = express();
// const PORT = process.env.PORT || 7000;

// mongoose.connect('mongodb://localhost:27017/chat-assitant')
// app.use(cors())
// app.use(express.json())

// app.use('/api/orders', orderRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js

const express = require('express');
const mongoose = require('mongoose');
const OpenAI =require("openai")

 const openai = new OpenAI({
 apiKey:"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"
 });
const cors = require("cors")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Order schema and model using Mongoose
const orderSchema = new mongoose.Schema({
    orderId: Number,
    status: String,
    deliveryDate: Date
});

const Order = mongoose.model('Order', orderSchema);
app.use(cors())
app.use(express.json())

// Process user query
app.post('/api/orders/process-query', async (req, res) => {
    const { query } = req.body;

    try {
        if (query.toLowerCase().includes('order') && !isNaN(parseInt(query))) {
            const orderId = parseInt(query);
            const orderDetails = await fetchOrderDetails(orderId);
            if (orderDetails) {
                res.json({
                    status: 'success',
                    data: {
                        response: `Thank you for sharing the details. Your order is ${orderDetails.status} and will be delivered by ${orderDetails.deliveryDate.toDateString()}.`
                    }
                });
            } else {
                res.json({ status: 'error', message: 'Order details not found' });
            }
        } else {
            // Handle other types of queries
            const botResponse = await generateBotResponse(query);
            res.json({ status: 'success', data: { response: botResponse } });
        }
    } catch (error) {
        console.error('Error processing query:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});

// Fetch order details from MongoDB
async function fetchOrderDetails(orderId) {
    try {
        const order = await Order.findOne({ orderId });
        return order;
    } catch (error) {
        console.error('Error fetching order details:', error);
        return null;
    }
}

// Generate response using OpenAI
async function generateBotResponse(query) {
    const completion = await openai.chat.completions.create({
 model: "gpt-3.5-turbo",
 messages: [{ role: "user", content: query }],
 max_tokens:100
 });

 console.log(completion.data.choices[0].message);
    return completion.data.choices[0].message
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

