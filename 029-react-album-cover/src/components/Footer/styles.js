import styled from "styled-components";
import { Marginals } from "../../styles";

export const Footer = styled.footer`
  ${Marginals}
  justify-content: space-between;
  bottom: 0;
  z-index: 1;
  padding: 32px 40px;
  pointer-events: none;
`;

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 100%;

  @media (max-width: 700px) {
    font-size: 80px;
  }
`;
