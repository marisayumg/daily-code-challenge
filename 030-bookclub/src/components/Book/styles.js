import styled from "styled-components";

export const Container = styled.figure`
  cursor: ${({ $isLarge }) => ($isLarge ? "default" : "pointer")};
  margin: 0;
`;

export const Cover = styled.img`
  filter: grayscale(100%);
  border: 2px solid black;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${({ $isLarge }) => ($isLarge ? "24px" : "18px")};
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 4px 0;
  opacity: 0.9;
`;

export const Author = styled.h4`
  font-size: 15px;
  font-weight: 100;
  line-height: 1.6;
  margin: 0 0 16px 0;
  opacity: 0.7;
`;
