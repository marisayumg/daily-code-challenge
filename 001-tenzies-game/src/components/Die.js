import React from "react";
import styled from "styled-components";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "black" : "white",
    color: props.isHeld ? "white" : "black",
  };

  return (
    <DieFace style={styles} onClick={props.holdDice}>
      <h2>{props.value}</h2>
    </DieFace>
  );
}

const DieFace = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 100ms ease-in-out;

  :hover {
    transform: scale(105%, 105%);
    /* box-shadow: 8px 16px 16px rgba(0, 0, 0, 0.15); */
  }
`;
