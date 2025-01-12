# MongoDB Auction Seeder and API

A CLI tool for seeding and managing auction data in MongoDB, along with a REST API for searching items.

## Prerequisites

- Node.js
- MongoDB running locally on port 27017

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

### CLI Commands

Seed the database with sample auction items:
```bash
npm run seed
```

Delete all auction items from the database:
```bash
npm run delete
```

### API Server

Start the API server:
```bash
npm start
```

The server will run on http://localhost:5000

### API Endpoints

Search for auction items:
```
GET /api/auctions?search=keyword
```

- Without search parameter: Returns all items
- With search parameter: Returns items matching the keyword in title or description
