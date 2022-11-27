import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import BooksContainer from "./components/BooksContainer";
import DetailPanel from "./components/DetailPanel";
import Search from "./components/Search";
import { Transition } from "react-transition-group";

const App = () => {
  // store the API response
  const [books, setBooks] = useState([]);
  // store the clicked booked
  const [selectedBook, setSelectedBook] = useState(null);
  // track if Detail Panel is open or closed
  const [showPanel, setShowPanel] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

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
      setFilteredBooks(books);
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) => {
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase());
    };

    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter(
          (book) =>
            stringSearch(book.title, searchTerm) ||
            stringSearch(book.author, searchTerm)
        )
      );
    }
  };

  const hasFiltered = filteredBooks.length !== books.length;

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? "Search results" : "All books"}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
          />
        )}
      </Transition>
    </>
  );
};

export default App;
