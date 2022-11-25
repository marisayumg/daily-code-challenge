import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  padding: 120px 40px;
  overflow: scroll;
  color: white;

  @media (max-width: 800px) {
    padding: 80px 24px;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 64px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
  }
`;
