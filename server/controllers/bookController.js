// controllers/bookController.js
const Book = require('../models/Book');

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    const { title, author, price, description, genre } = req.body;
    const newBook = new Book({ title, author, price, description, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getBooks,
  createBook,
};

