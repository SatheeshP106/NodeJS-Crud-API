const mongoose = require('mongoose');

// Define the item schema
const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

// Create and export the Item model
module.exports = mongoose.model('Item', ItemSchema);
