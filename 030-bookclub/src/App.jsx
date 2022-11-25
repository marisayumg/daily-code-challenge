import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";

const App = () => {
  // store the API response
  const [books, setBooks] = useState([]);
  // store the clicked booked
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // can't write async function directly on useEffect function
    const fetchData = async () => {
      const response = await fetch(
        "https://book-club-json.herokuapp.com/books"
      );
      console.log("This is our response", response);
      const books = await response.json();
      console.log("This is our jsonified response", books);
      setBooks(books);
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
  };

  console.log(selectedBook);

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />
    </>
  );
};

export default App;
