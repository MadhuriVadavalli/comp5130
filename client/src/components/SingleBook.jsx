import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import the useCart hook

const SingleBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const { addToCart } = useCart(); // Get the addToCart function from context

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://localhost:5000/api/books/${bookId}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleAddToCart = () => {
    if (book) {
      addToCart(book); // Add the book to the cart
    }
  };

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Price: ${book.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-700 text-white py-2 px-4 rounded-md mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleBook;
