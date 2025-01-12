import mongoose from 'mongoose';
import AuctionItem from './AuctionItem.js';
import { auctionItems } from './seedData.js';

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/auctionDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

// CLI Tool
const runCLI = async (action) => {
    await connectDB();

    if (action === 'seed') {
        try {
            await AuctionItem.deleteMany(); // Clear database
            await AuctionItem.insertMany(auctionItems); // Add seed data
            console.log('Database seeded successfully!');
        } catch (err) {
            console.error('Error seeding database:', err);
        }
    } else if (action === 'delete') {
        try {
            await AuctionItem.deleteMany(); // Clear database
            console.log('All data deleted from the database!');
        } catch (err) {
            console.error('Error deleting database:', err);
        }
    } else {
        console.log('Invalid action. Use "seed" or "delete".');
    }

    mongoose.connection.close();
};

// Command-line arguments
const action = process.argv[2]; // e.g., "seed" or "delete"
runCLI(action);
