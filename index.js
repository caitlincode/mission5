#! /usr/bin/env node 
//shebang line to tell the system that this is a node script and should be run with node
const { program } = require('commander');
const chalk = require('chalk');
const connectDB = require('./db');
const AuctionItem = require('./AuctionItem');
const list = require('./commands/list');
const add = require('./commands/add');
const markDone = require('./commands/markDone');

program
    .version('1.0.0')
    .description('Auction and Todo Management CLI');

program
    .command('add-auction <title> <description> <start_price> <reserve_price>')
    .description('Add an auction item')
    .action(async (title, description, start_price, reserve_price) => {
        connectDB();
        try {
            const newItem = await AuctionItem.create({ title, description, start_price, reserve_price });
            console.log(chalk.green('Auction item added!'));
            console.log(newItem);
            process.exit();
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    });

// Include other auction commands similarly, such as listing and deleting items
