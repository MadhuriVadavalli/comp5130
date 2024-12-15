import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {
        setBooks(data.slice(0, 8)); // Get the first 8 books for the initial load
        setFilteredBooks(data.slice(0, 8)); // Filtered books for display
      })
      .catch(err => setError('Failed to load books'));
  }, []);

  const handleSearch = () => {
    const result = books.filter(book => book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()));

    if (result.length > 0) {
      setFilteredBooks(result);
      setError('');
    } else {
      setFilteredBooks([]);
      setError('Book not found');
    }
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2><br></br>

      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="border px-4 py-2 rounded-lg"
          placeholder="Search for a book"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Error message if no book is found */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Book Cards */}
      <div className='grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          filteredBooks.map(book => (
            <Card key={book._id}>
              <img src={book.imageURL} alt={book.bookTitle} className='h-96' />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>

              {/* Button to view or download PDF */}
              {book.bookPDFURL && (
                <div className="mt-4 text-center">
                  <a
                    href={book.bookPDFURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-black"
                  >
                    BOOK URL
                  </a>
                </div>
              )}
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Shop;
