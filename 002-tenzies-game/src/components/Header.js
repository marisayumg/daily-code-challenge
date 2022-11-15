import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

export default function Intro() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Tenzies logo" />
        <img src={logo} alt="Tenzies logo" />
      </Logo>
      <h1>Tenzies</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 24px;
`;
