import express from 'express';
import mongoose from 'mongoose';
import AuctionItem from './AuctionItem.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/auctionDB')
  .then(() => console.log('MongoDB connected for API'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Endpoint to Search Auction Items
app.get('/api/auctions', async (req, res) => {
    try {
        const { search } = req.query; // Search query from URL
        const query = search
            ? { $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }] }
            : {};
        const items = await AuctionItem.find(query);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching auction items.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
