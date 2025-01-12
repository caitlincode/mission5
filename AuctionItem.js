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
