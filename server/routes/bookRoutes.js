// routes/bookRoutes.js
const express = require('express');
const { getBooks, createBook } = require('../controllers/bookController');
const router = express.Router();

// Route to get all books
router.get('/', getBooks);

// Route to create a new book
router.post('/', createBook);

module.exports = router;

