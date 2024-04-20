// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: String,
  customer_name: String,
  order_date: Date,
  order_time: String,
  order_items: [String],
  order_status: String,
  estimated_delivery: Date,
  payment_type: String,
  coins_used: Boolean
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

/* 
db.orders.insertOne({
  order_id: 23599045,
  customer_name: "Rahul Sinha",
  order_date: ISODate("2024-04-02T08:34:00Z"),
  order_time: "08:34",
  order_items: ["Amoxil 500mg", "Euthyrox 250mg"],
  order_status: "ready for dispatch",
  estimated_delivery: ISODate("2024-04-07T00:00:00Z"),
  payment_type: "Prepaid",
  coins_used: true
})
*/
