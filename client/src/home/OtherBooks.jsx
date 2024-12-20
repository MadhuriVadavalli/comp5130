import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';


const OtherBooks = () => {
  const [books, setBooks]= useState([]);
  useEffect(()=>{
     fetch("https://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(4,10)))
  },[])
  return (
    <div>
      <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
