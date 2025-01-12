<<<<<<< HEAD
import mongoose from 'mongoose';

const auctionItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_price: {
        type: Number,
        required: true,
        min: 0
    },
    reserve_price: {
        type: Number,
        required: true,
        min: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('AuctionItem', auctionItemSchema);
=======
const mongoose = require('mongoose');
const AuctionItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    start_price: Number,
    reserve_price: Number
});
const AuctionItem = mongoose.model('AuctionItem', AuctionItemSchema);
module.exports = AuctionItem;
>>>>>>> 72a3623aaa17dc4858d2596275b82ee6f6c88d9d
