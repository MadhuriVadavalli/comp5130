import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookPDFURL } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      {/* Book Image */}
      <img src={imageURL} alt={bookTitle} className='h-96' />

      {/* Display the Book PDF URL if available */}
      {bookPDFURL && (
        <div className="mt-4 text-left">
          <a
            href={bookPDFURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-black"
          >
            BOOK URL
          </a>
        </div>
      )}
    </div>
  );
};

export default SingleBook;
