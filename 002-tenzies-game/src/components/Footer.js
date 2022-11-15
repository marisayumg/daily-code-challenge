import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p>Designed & developed by M – O</p>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  text-align: right;
`;
