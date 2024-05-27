import { useState, useEffect } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4005/api/books');
      const json = await response.json();
      setBooks(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <div className="title">{book.title}</div>
            <div className="author">Author: {book.author}</div>
            <div className="year_published">Published: {book.year_published}</div>
            <div className="rating">Rating: {book.rating}</div>
            <div className="description">{book.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
