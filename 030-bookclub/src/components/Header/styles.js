import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 260px;
  display: block;

  @media (max-width: 800px) {
    height: 32px;
    width: 220px;
  }
`;

export const HeaderContainer = styled.header`
  background-color: white;
  padding: 24px 40px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 16px;
  }
`;
