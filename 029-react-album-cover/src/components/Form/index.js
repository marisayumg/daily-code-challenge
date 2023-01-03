import React from "react";
import { Form, Input, Button } from "./styles";

const FormComponent = ({ handleSuccess }) => {
  return (
    <Form onSubmit={handleSuccess}>
      <label for="name">Name:</label>
      <Input name="name" type="text" required autoComplete="off" />

      <label for="email">Email address:</label>
      <Input name="email" type="email" required autoComplete="off" />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormComponent;
