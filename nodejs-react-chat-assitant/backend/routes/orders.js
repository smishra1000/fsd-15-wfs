const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { openai } = require('openai');
const Order = require("../models/order")

router.post('/process-query', async (req, res) => {
    const { query } = req.body;

    try {
        if (query.toLowerCase().includes('order') && !isNaN(parseInt(query))) {
            const orderId = parseInt(query);
            const orderDetails = await fetchOrderDetails(orderId);
            if (orderDetails) {
                res.json({
                    status: 'success',
                    data: {
                        response: `Thank you for sharing the details. Your order is ${orderDetails.status} and will be delivered by ${orderDetails.deliveryDate}.`
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

async function fetchOrderDetails(orderId) {
    try {
        // Perform API call to fetch order details
        // Replace the URL with your actual API endpoint
        const response = await Order.findOne({orderId})
        if (response.ok) {
            const orderDetails = await response.json();
            return orderDetails;
        } else {
            console.error('Error fetching order details:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error fetching order details:', error);
        return null;
    }
}

async function generateBotResponse(query) {
    // Use the OpenAI API to generate a response
    const response = await openai.Completion.create({
      engine: 'text-davinci-003',
      prompt: query,
      max_tokens: 150
  });
  return response.choices[0].text.trim();
}

module.exports = router;
