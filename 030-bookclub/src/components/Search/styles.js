import styled from "styled-components";
import { Pill } from "../../styles";
import { ReactComponent as MagnifyingGlass } from "../../assets/search.svg";

export const SearchContainer = styled(Pill)`
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "40px")};
  border: 2px solid white;
  transition: 500ms cubic-bezier(0.25, 1, 0.5, 1);

  @media (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};

    @media (max-width: 800px) {
      display: block;
    }
  }
`;

export const Input = styled.input`
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  flex-grow: 1;
  background: black;
  border: none;
  padding: 8px;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 24px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background-color: black;
    border-top: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`;
