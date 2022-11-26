import styled from "styled-components";

export const Panel = styled.article`
  background-color: black;
  border-left: 1px solid white;
  height: calc(100vh - 80px);
  width: 640px;
  padding: 40px 120px 64px 40px;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow: scroll;

  @media (max-width: 800px) {
    border: none;
    width: 100vw;
    height: calc(100vw - 64px);
    padding: 40px 80px 20px 20px;
    bottom: 0;
    right: unset;
  }
`;
