import React from "react";
import styled from "styled-components";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Game() {
  const [dice, setDice] = React.useState(allNewDice);
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  // create a new die object
  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // get 10 random numbers and push them to the array
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  // rolls new dice unless the dice was held
  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice);
    }
  }

  // holds the value of a clicked die
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <Container>
      {tenzies && <Confetti />}
      {tenzies
        ? "Congrats! But can you do it faster?"
        : "Can you get 10 dice of the same number?"}
      <ContainerDice>{diceElements}</ContainerDice>
      <RollButton onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </RollButton>
    </Container>
  );
}

const Container = styled.div``;

const ContainerDice = styled.div`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  padding: 24px;
  gap: 24px;
`;

const RollButton = styled.button`
  border: none;
  background: black;
  color: white;
  padding: 16px 40px;
  cursor: pointer;
`;
