import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    color: white;
  }
`;

export const Pill = styled.div`
  background: black;
  border: 2px solid black;
  border-radius: 32px;
  height: 24px;
  width: 400px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
