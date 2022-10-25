import React from "react";
import styled from "styled-components";

export default function Footer(props) {
  return (
    <Container>
      <p>Your tries: {props.count}</p>
      <p>Designed and developed by Marisa O.</p>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
