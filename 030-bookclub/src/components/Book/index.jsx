import React from "react";
import { Container, Cover, Title, Author } from "./styles";

const Book = ({ book, pickBook }) => {
  return (
    <Container onClick={() => pickBook(book)}>
      <Cover
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
      />
      <figcaption>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
      </figcaption>
    </Container>
  );
};

export default Book;
