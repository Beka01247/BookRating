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

  return(
    <div>
      <h1>Books</h1>
      <ul>
        { books.map((book, index) => (
          <li key={index}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.year_published}</div>
            <div>{book.rating}</div>
            <div>{book.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
