import styled from "styled-components";
import { AbsoluteCenter } from "../../styles";

export const Modal = styled.div`
  ${AbsoluteCenter};
  animation: shadow 1s forwards;
  background: white;
  color: black;
  padding: 32px;
  max-width: 640px;
  width: calc(100vw - 60px);
  z-index: 3;
`;

export const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

export const Close = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 32px;
  right: 32px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &::before,
  &::after {
    background: black;
    content: "";
    position: absolute;
    height: 32px;
    width: 2px;
    top: 0;
    left: 16px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
