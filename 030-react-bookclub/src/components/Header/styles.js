import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

export const Logo = styled(LogoSVG)`
  height: 24px;
  width: auto;
  display: block;

  @media (max-width: 800px) {
    height: 32px;
    width: 220px;
  }
`;

export const HeaderContainer = styled.header`
  background-color: black;
  padding: 24px 40px;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid white;
  z-index: 1;
  position: fixed;

  @media (max-width: 800px) {
    padding: 16px;
  }
`;
