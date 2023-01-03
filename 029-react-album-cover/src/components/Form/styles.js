import styled from "styled-components";

export const Form = styled.form`
  margin: 40px 0;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 2px solid black;
  font-size: 18px;
  margin: 4px 0 16px 0;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 16px 32px;
  border-radius: 24px;
  margin-top: 8px;
  text-transform: uppercase;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
