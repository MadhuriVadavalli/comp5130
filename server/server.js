// Import required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { getAllUsers } = require('./firebaseAdmin');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration for MongoClient
const uri = "mongodb+srv://Mybookstore:ecom@cluster0.eajvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// MongoDB connection setup for Mongoose
mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Book = require('./models/Book'); // Assuming you have a Book model

// Connect to MongoDB via MongoClient
async function run() {
  try {
    await client.connect();
    const bookCollections = client.db("BookInventory").collection("books");

    // Insert a book (Post method)
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // Get all books (GET method)
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // Update a book (PATCH method)
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = { $set: { ...updateBookData } };
      const options = { upsert: true };
      const result = await bookCollections.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    // Delete a book (DELETE method)
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // Get a single book (GET method)
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Search for books (GET method)
    app.get('/api/books/search', async (req, res) => {
      const { query } = req.query;
      try {
        const books = await Book.find({
          title: { $regex: query, $options: 'i' }, // Case-insensitive search
        });
        res.json(books);
      } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Server error');
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

// Firebase users endpoint
app.get('/api/users', async (req, res) => {
  try {
    const users = await getAllUsers(); // Get users from Firebase
    res.json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// HTTPS server options
const sslOptions = {
  key: fs.readFileSync("../cert/localhost+2-key.pem"),
  cert: fs.readFileSync("../cert/localhost+2.pem"),
};

// Start the HTTPS server
const PORT = 5000; // Set to 5000
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS SERVER STARTED AT https://localhost:${PORT}`);
});
