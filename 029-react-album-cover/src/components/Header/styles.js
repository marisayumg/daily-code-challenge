import styled from "styled-components";
import { Marginals } from "../../styles";

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  top: 0;
  z-index: 1;
  padding: 24px;
  pointer-events: none;

  @media (max-width: 700px) {
    padding: 16px;
  }
`;

export const H1 = styled.h1`
  font-size: 140px;
  line-height: 100%;

  @media (max-width: 700px) {
    font-size: 80px;
  }
`;
