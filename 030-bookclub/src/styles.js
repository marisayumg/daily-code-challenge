import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFE0C9;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    color: white;
  }
`;

export const Pill = styled.div`
  background: black;
  border: 2px solid white;
  border-radius: 32px;
  height: 40px;
  width: 400px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  /* Close button */
  &::before,
  &::after {
    background-color: white;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 8px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
