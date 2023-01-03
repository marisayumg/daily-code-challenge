import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @keyframes shadow {
      0% {
        box-shadow: rgba(255,255,255, 0.7) 0 0 0px;
      }
      100% {
        box-shadow: rgba(255,255,255, 0.7) 10px 0 100px;
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
        color: white;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: "Arial", sans-serif;
        background-color: black;
    }
    
    img {
        max-width: 640px;
    }
`;

export const Marginals = css`
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  display: flex;
  z-index: 1;
`;

export const ImageContainer = styled.div.attrs(({ $isTogether }) => ({
  style: {
    animation: $isTogether ? "shadow 3s infinite alternate" : "none",
  },
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 600px;

  @media (max-width: 700px) {
    position: fixed;
    transform: scale(70%, 70%);
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  ${AbsoluteCenter};
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 100%;
  padding: 24px 40px;
  font-size: 18px;
  text-transform: uppercase;
  z-index: 2;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  :hover {
    background: white;
    color: black;
    animation: shadow 1s forwards;
  }

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  }
`;
