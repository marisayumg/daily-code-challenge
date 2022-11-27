import React, { useRef, useState, useEffect } from "react";
import { debounce } from "lodash-es";
import { Container, H2, BookList } from "./styles";
import Book from "../Book";

const BooksContainer = ({ books, pickBook, isPanelOpen, title }) => {
  // store the Y pixel value of the browser scroll
  const [scroll, setScroll] = useState(0);
  const prevPanelState = useRef(false);

  // gets triggered whenever the isPanelOpen changes
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY);
    }, 100);

    if (!isPanelOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    // clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPanelOpen]);

  // gets triggered based on the three variable
  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll);
    }

    prevPanelState.current = isPanelOpen;
  }, [isPanelOpen, prevPanelState, scroll]);

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  );
};

export default BooksContainer;
