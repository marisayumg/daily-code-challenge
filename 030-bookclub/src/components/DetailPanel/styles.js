import styled from "styled-components";
import { Pill } from "../../styles";

export const Panel = styled.article`
  background-color: black;
  border-left: 1px solid white;
  height: 100vh;
  width: 640px;
  padding: 40px 120px 64px 40px;
  position: fixed;
  right: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 0 : "-640px"};
  bottom: 0;
  z-index: 2;
  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    width: 100vw;
    height: 100vh;
    padding: 40px 80px 24px 24px;
    bottom: ${({ $state }) =>
      $state === "entering" || $state === "entered" ? 0 : "-100vh"};
    right: unset;
  }
`;

export const P = styled.p`
  margin-bottom: 40px;
`;

export const Em = styled.em`
  font-style: italic;
  opacity: 0.7;
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
    background-color: black;
    content: "";
    height: 24px;
    width: 24px;
    position: absolute;
    top: 0;
    left: -2px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const CloseWrapper = styled(Pill)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 8px;
  display: ${({ $state }) => ($state === "entered" ? "flex" : "none")};
  position: fixed;
  top: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 24px;
    right: 24px;
  }
`;

export const BG = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  cursor: pointer;
  z-index: 1;

  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};
  pointer-events: ${({ $state }) => ($state === "exited" ? "none" : "auto")};
  transition: 300ms;
`;
