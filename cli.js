const {program} = require('commander');
const mongoose = require('mongoose');
const AuctionItem = require('./AuctionItem');
const connectDB = require('./db');

program
    .version('1.0.0')
    .description('Auction Data Management CLI');
   
// Seed the database with an auction item
program
    .command('seed')
    .description('Seed the database with an auction item')
    .action(async () => {
        await connectDB();

        const auctionItem = new AuctionItem({
            title: program.title,
            description: program.description,
            start_price: program.startPrice,
            reserve_price: program.reservePrice
        });

        await auctionItem.save();

        console.log('Auction item seeded successfully');
        process.exit();
    });

// List all auction items
program
    .command('list')
    .description('List all auction items')
    .action(async () => {
        await connectDB();

        const auctionItems = await AuctionItem.find();

        console.log(auctionItems);
        process.exit();
    });

// Delete an auction item
program
    .command('delete <id>')
    .description('Delete an auction item')
    .action(async (id) => {
        await connectDB();

        await AuctionItem.findByIdAndDelete(id);

        console.log('Auction item deleted successfully');
        process.exit();
    });

program
    .option('-t, --title <title>', 'Auction item title')
    .option('-d, --description <description>', 'Auction item description')
    .option('-s, --start-price <startPrice>', 'Auction item start price')
    .option('-r, --reserve-price <reservePrice>', 'Auction item reserve price');

program.parse(process.argv);

